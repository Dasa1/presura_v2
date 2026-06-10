# 11 Content & Copy Blueprint

Status: DRAFT — implementation blueprint generated from approved website-only docs.  
Source: `/project-docs/01-research.md`, `/project-docs/02-product-spec.md`, `/project-docs/04-ux-spec.md`

## Purpose

This document defines implementation-ready content and copy patterns for the technical-service-website MVP.

Use this before seed content, Sanity content setup, page copy, CTA, SEO metadata and form microcopy tasks.

## Rules

- Do not invent final business NAP/contact details.
- Do not fabricate certifications, reviews, years of experience, prices, service guarantees or local proof.
- Use placeholders during build only where approved.
- Replace real-work/proof/trust placeholders before launch where they are launch-relevant.
- Use ranges/from-prices with caveats where possible.
- Tone must be expert, calm, local and practical.

## Voice and tone

| Attribute | Guidance |
|---|---|
| Expert | Explain technical work clearly without sounding academic. |
| Calm | Emergency pages should reassure, not scare. |
| Local | Mention service area only when approved and relevant. |
| Transparent | State price variability and response expectations. |
| Concrete | Prefer specific service outcomes over vague claims. |

## Global copy rules

- Use active, direct CTAs: “Nazovite servis”, “Zatražite ponudu”, “Provjerite okvirne cijene”.
- Avoid generic “Saznaj više” as the primary CTA on commercial pages.
- Explain benefits in user terms: warmth, reliability, lower waste, safety, longer equipment life.
- Avoid unsupported legal/safety guarantees.
- Keep first-viewport copy short on mobile.

## Page copy patterns

### Homepage

Headline pattern: `[Primary service/category] u [approved service area] — brzo, stručno i transparentno.`  
Subheadline pattern: `Od hitnih intervencija do planiranih radova, pomažemo riješiti probleme grijanja i instalacija uz jasnu komunikaciju i dokazive rezultate.`  
Primary CTA: `Nazovite servis`  
Secondary CTA: `Zatražite ponudu`

### Service page

Headline pattern: `[Service name] za [approved area placeholder]`  
Subheadline pattern: `Stručno rješenje za [problem/outcome], uz jasne korake, okvirne cijene i dokazive radove.`  
Primary CTA: `Nazovite za servis`  
Secondary CTA: `Pošaljite upit`

### Problem page

Headline pattern: `[Symptom/problem] — što može biti uzrok i kada zvati servis`  
Subheadline pattern: `Objasnit ćemo najčešće uzroke, što možete sigurno provjeriti i koja usluga najčešće rješava problem.`  
Primary CTA: `Nazovite ako je hitno`  
Secondary CTA: `Zatražite procjenu`

### Location page

Headline pattern: `[Service category] u [location]`  
Subheadline pattern: `Lokalna dostupnost, stvarni radovi i usluge dostupne na području [location].`  
Primary CTA: `Nazovite za [location]`  
Secondary CTA: `Pošaljite upit`

### Pricing / inquiry page

Headline pattern: `Okvirne cijene i upit za servis`  
Subheadline pattern: `Cijene ovise o vrsti usluge, opsegu radova i stanju sustava. Pošaljite upit za točniju procjenu.`  
Primary CTA: `Pošaljite upit`  
Secondary CTA: `Nazovite servis`

### Contact page

Headline pattern: `Kontaktirajte servis`  
Subheadline pattern: `Za hitne probleme nazovite odmah. Za ponudu ili planirane radove pošaljite kratak upit.`

## CTA copy

| Context | Primary CTA | Secondary CTA | Notes |
|---|---|---|---|
| Emergency hero | Nazovite servis | Pošaljite upit | Phone path must be first. |
| Service page | Nazovite za servis | Zatražite ponudu | Keep direct. |
| Problem page | Nazovite ako je hitno | Pogledajte preporučenu uslugu | Do not overdiagnose. |
| Pricing | Pošaljite upit | Nazovite servis | Price users often need reassurance. |
| Contact | Nazovite sada | Pošaljite poruku | Respect preferred contact method. |

## Trust copy

### Proof statement patterns

- `Stvarni radovi i fotografije iz terena — bez generičkih prikaza.`
- `Jasna procjena prije radova, uz objašnjenje što je uključeno.`
- `Usluge prikazane prema problemu, lokaciji i stvarnim dokazima.`

### Certification/trust badge copy

Use only when approved:

- `[Approved certification/partner badge]`
- `[Approved review source] ocjena: [approved rating]`

NEEDS HUMAN APPROVAL: final certifications, review snippets and trust badges.

### Local proof copy

- `Primjeri radova na području [location]`.
- `Lokalni uvjeti i česti problemi u [location]` only when supported by real evidence.

### Review/testimonial guidance

- Use approved public reviews only.
- Do not rewrite reviews in a way that changes meaning.
- Do not publish names, addresses or identifying details unless approved.

## Pricing copy

### From/range price pattern

- `Od [X] € — konačna cijena ovisi o opsegu radova i stanju sustava.`
- `[X–Y] € — raspon vrijedi za tipične slučajeve; za točnu procjenu pošaljite upit.`

### Caveat pattern

`Cijena može varirati ovisno o lokaciji, dostupnosti, stanju instalacije, potrebnim dijelovima i dodatnim radovima. Prije početka rada dobit ćete jasnije objašnjenje troška.`

### What to avoid

- “Najjeftiniji” unless legally and factually supported.
- Fixed prices without approval.
- Hidden caveats.

## Form microcopy

### Intro text

`Opišite problem u nekoliko rečenica. Odgovorit ćemo s preporukom ili okvirnom procjenom prema dostupnim informacijama.`

### Field helper text

- Name: `Kako vas možemo osloviti?`
- Phone: `Najbrži kontakt za hitne intervencije.`
- Email: `Koristimo ga samo za odgovor na vaš upit.`
- Location: `Dovoljno je navesti mjesto ili naselje.`
- Message: `Navedite uređaj, problem i kada se pojavio.`

### Privacy notice

`Podatke iz upita koristimo za odgovor na vaš zahtjev. Upiti se čuvaju do 6 mjeseci, osim ako postanu dio aktivnog poslovnog/kupčevog zapisa.`

### Success message

`Hvala. Vaš upit je zaprimljen. Ako je problem hitan, preporučujemo da nas nazovete.`

### Error messages

| Scenario | Message |
|---|---|
| Missing contact | `Unesite telefon ili email kako bismo vam mogli odgovoriti.` |
| Invalid phone | `Provjerite format telefonskog broja.` |
| Invalid email | `Provjerite format email adrese.` |
| Message too short | `Opišite problem s barem nekoliko riječi.` |
| Anti-spam fail | `Nismo mogli potvrditi slanje obrasca. Pokušajte ponovno.` |
| Rate limit | `Poslali ste više upita u kratkom vremenu. Pokušajte ponovno kasnije.` |
| Server error | `Došlo je do greške pri slanju. Pokušajte ponovno ili nas nazovite.` |

## SEO title/meta patterns

| Page type | Title pattern | Meta description pattern |
|---|---|---|
| Homepage | `[Brand placeholder] | Servis grijanja i tehničke usluge u [area]` | `Brz i pouzdan servis grijanja, instalacija i povezanih tehničkih usluga. Nazovite ili pošaljite upit za okvirnu procjenu.` |
| Service | `[Service] [Area] | [Brand placeholder]` | `Stručna usluga: [service]. Saznajte simptome, okvirne cijene i kada nazvati servis.` |
| Problem | `[Problem] — uzroci i rješenje | [Brand placeholder]` | `Saznajte što može značiti [problem], koja usluga pomaže i kada je najbolje kontaktirati servis.` |
| Location | `[Service category] [Location] | [Brand placeholder]` | `Usluge na području [location] uz lokalne dokaze, radove i mogućnost brzog kontakta.` |
| Pricing | `Cjenik i upit za servis | [Brand placeholder]` | `Pogledajte okvirne cijene, što utječe na konačan trošak i pošaljite upit za procjenu.` |
| Contact | `Kontakt | [Brand placeholder]` | `Nazovite servis ili pošaljite upit. Za hitne probleme preporučujemo telefonski kontakt.` |

## Placeholder content rules

### Allowed placeholders during build

- Brand display name.
- Phone/email/address/NAP.
- Certification/review badges.
- Work photos and local proof blocks.
- Price numbers if clearly marked placeholder.

### Must be replaced before launch

- Public phone/contact values.
- Business NAP/schema data.
- Real proof/trust assets where page depends on them.
- Local proof for published location pages.
- Placeholder price numbers if displayed publicly.

### Must not be fabricated

- Reviews.
- Certifications/partner status.
- Years of experience.
- Exact response times.
- Fixed prices.
- Completed works/case studies.

## Approval checklist

- [ ] Final public NAP/contact data approved before launch.
- [ ] Real proof/trust assets approved before launch where required.
- [ ] Price ranges/from-prices approved before public launch.
- [ ] Privacy/form microcopy reviewed with final privacy policy.
- [ ] Placeholder content removed or clearly blocked from production pages.
