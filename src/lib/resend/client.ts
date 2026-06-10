import { Resend } from 'resend';

const resendApiKey = import.meta.env.RESEND_API_KEY || '';

const isPlaceholder = !resendApiKey || resendApiKey.includes('PLACEHOLDER');

class MockResendClient {
  emails = {
    send: async (payload: any) => {
      console.log(`[MockResendClient] Mock email sent: From=${payload.from}, To=${payload.to}, Subject=${payload.subject}`);
      return { data: { id: 'mock-email-id' }, error: null };
    }
  };
}

class BrokenResendClient {
  emails = {
    send: async (payload: any) => {
      console.error(`[Email] Production email configuration error: missing or placeholder api key.`);
      return { data: null, error: { message: 'Resend client not configured.' } };
    }
  };
}

export const resendClient = (isPlaceholder && import.meta.env.DEV)
  ? new MockResendClient() as any
  : (isPlaceholder
      ? new BrokenResendClient() as any
      : new Resend(resendApiKey));
