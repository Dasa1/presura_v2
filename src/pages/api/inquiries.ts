import type { APIRoute } from 'astro';
import { supabaseClient } from '../../lib/supabase/client';
import { resendClient } from '../../lib/resend/client';
import { isRateLimited } from '../../lib/security/rateLimiter';

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // 1. Retrieve Client IP for Rate Limiting
    const clientIp = request.headers.get('x-forwarded-for') || clientAddress || '127.0.0.1';

    // 2. Parse Body Data (supports JSON or Form-data)
    let body: any = {};
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      body = await request.json();
    } else {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    }

    const { 
      name, 
      phone, 
      email, 
      contact_method, 
      service_interest, 
      location, 
      message, 
      website, // Honeypot field
      'cf-turnstile-response': turnstileResponse 
    } = body;

    // 3. Honeypot check: If the hidden 'website' field is filled, return silent success
    if (website) {
      console.log('[Anti-Spam] Honeypot field filled. Silent rejection triggered.');
      return new Response(JSON.stringify({ success: true, message: 'Upit uspješno zaprimljen.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Rate Limiting Check
    if (isRateLimited(clientIp)) {
      console.log('[Security] Rate limit exceeded.');
      return new Response(JSON.stringify({ success: false, error: 'Previše zahtjeva. Molimo pokušajte ponovno kasnije.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 5. Input Validation
    if (!name || !name.trim()) {
      return new Response(JSON.stringify({ success: false, error: 'Ime je obavezno.' }), { status: 400 });
    }
    if (!message || !message.trim()) {
      return new Response(JSON.stringify({ success: false, error: 'Poruka je obavezna.' }), { status: 400 });
    }
    if (message.length > 1000) {
      return new Response(JSON.stringify({ success: false, error: 'Poruka je predugačka (maksimalno 1000 znakova).' }), { status: 400 });
    }

    // Contact Channel check: require Phone OR Email
    const hasPhone = phone && phone.trim();
    const hasEmail = email && email.trim();
    if (!hasPhone && !hasEmail) {
      return new Response(JSON.stringify({ success: false, error: 'Molimo unesite barem jedan kontakt kanal (Telefon ili E-mail).' }), { status: 400 });
    }

    // 6. Turnstile Verification
    const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY || '';
    const isMockTurnstile = (!turnstileSecret || turnstileSecret.includes('PLACEHOLDER')) && import.meta.env.DEV;

    if (!isMockTurnstile) {
      if (!turnstileResponse) {
        console.log('[Security] Turnstile response token is missing in production-like mode.');
        return new Response(JSON.stringify({ success: false, error: 'Spam provjera je obavezna.' }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(turnstileResponse)}`
      });
      const outcome = await response.json();
      if (!outcome.success) {
        console.log('[Security] Turnstile token verification failed.');
        return new Response(JSON.stringify({ success: false, error: 'Spam provjera nije uspjela.' }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } else {
      console.log('[Security] Skipping real Turnstile validation (Local mock environment).');
    }

    // 7. Supabase Database Insertion (Server-only credentials)
    const { error: dbError } = await supabaseClient.from('inquiries').insert({
      name: name.trim(),
      phone: phone ? phone.trim() : null,
      email: email ? email.trim() : null,
      contact_method: contact_method || 'email',
      service_interest: service_interest || 'općenito',
      location: location || 'nema',
      message: message.trim()
    });

    if (dbError) {
      console.error('[Database] Error inserting inquiry metadata:', dbError.message);
      return new Response(JSON.stringify({ success: false, error: 'Došlo je do greške prilikom spremanja upita.' }), { status: 500 });
    }

    console.log('[Database] Inquiry saved successfully.');

    // 8. Resend Email Dispatch (Send email after DB write succeeds)
    const fromEmail = import.meta.env.RESEND_FROM_EMAIL || 'no-reply@example.com';
    const toEmail = import.meta.env.INQUIRY_RECIPIENT_EMAIL || 'admin@example.com';

    try {
      const { error: mailError } = await resendClient.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `Novi upit: ${service_interest || 'Općenito'} - ${location || 'Nepoznato'}`,
        html: `
          <h3>Novi upit s web stranice</h3>
          <p><strong>Ime:</strong> ${name.trim()}</p>
          <p><strong>Lokacija:</strong> ${location || 'Nije odabrano'}</p>
          <p><strong>Usluga:</strong> ${service_interest || 'Nije odabrano'}</p>
          <p><strong>Način kontakta:</strong> ${contact_method}</p>
          <p><strong>Telefon:</strong> ${phone || '/'}</p>
          <p><strong>E-mail:</strong> ${email || '/'}</p>
          <p><strong>Poruka:</strong></p>
          <p>${message.trim()}</p>
        `
      });

      if (mailError) {
        // Log redacted non-sensitive error details
        console.error('[Email] Failed to send email alert: dispatch error.');
      } else {
        console.log('[Email] Alert dispatch triggered successfully.');
      }
    } catch (mailException) {
      console.error('[Email] Resend client connection exception caught.');
    }

    // 9. Return success response (Still successful even if email failed, as long as DB write succeeded)
    return new Response(JSON.stringify({ success: true, message: 'Upit je uspješno zaprimljen. Kontaktirat ćemo Vas uskoro.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('[API Error] Request execution exception.');
    return new Response(JSON.stringify({ success: false, error: 'Došlo je do neočekivane pogreške.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
