# Known Limitations and Roadmap

Status: VERIFIED (Phase 6 Handover)  
Audience: owner / maintainer / product reviewer  
Project: technical-service-website / Presura

## Approved MVP limitation boundary

The MVP is strictly limited to the approved technical-service website scope.

## Known limitations before implementation

| Item | Status | Impact | Launch blocker? | Next step |
|---|---|---|---:|---|
| Final public NAP/contact/schema values are placeholders | NEEDS HUMAN APPROVAL | Public content/schema cannot be final | Yes before production launch | Owner supplies approved values |
| Real work photos/proof/trust assets not provided in package | NEEDS HUMAN APPROVAL | Placeholder content may reduce trust | Yes before production launch if placeholders remain | Owner supplies assets |
| Provider account ownership/access unknown | NOT VERIFIED | Handover cannot be completed | Yes for handover | Complete `/docs/account-access-handover.md` |
| Supabase retention automation/manual process not implemented | NOT VERIFIED | Privacy process incomplete | Launch blocker unless manually approved | Implement or document manual process |
| Performance & A11y Verification (Lighthouse Automation & Screen Readers) | NOT VERIFIED | Real-world validation metrics remain targets | No (targets only) | Validate on production environment |
| Mobile Throttled Performance | PARTIAL / KNOWN LIMITATION | Elevated LCP and loading timing under artificial 3G throttling | No for internal demo; Yes before public launch (P1) | Defer optimization to P1 phase |



## Explicitly out of MVP

- CRM integration.
- Mass local page generation.
- A/B testing.
- Advanced configurators.
- Multi-client template packaging.
- Large blog program.
- SaaS, scheduling, workforce, payroll or tenant functionality.

## Future roadmap candidates

These are not approved MVP work:

- CRM integration.
- Additional local pages after unique local proof exists.
- A/B testing after baseline traffic exists.
- Advanced inquiry/configurator flows.
- Larger editorial/blog program.
- More advanced analytics/ads setup after explicit approval.

## SCOPE RISK

Adding any roadmap item to implementation without updating approved requirements and tasks is a SCOPE RISK.
