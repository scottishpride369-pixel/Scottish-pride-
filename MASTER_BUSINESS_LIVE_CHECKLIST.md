# Master Business — Launch & Verification Checklist

## Built
- Static sales site with £49 entry offer and £199 automation offer.
- TEST Stripe checkout preserved and explicitly labelled TEST.
- Lead enquiry route to business inbox.
- PostHog funnel events for page view, CTA, checkout start, lead capture, upsell view and TEST purchase confirmation.
- GitHub Pages deployment workflow on `main`.
- Vercel configuration present in repository.

## Verification gates
- [x] Repository build files present.
- [x] TEST/LIVE payment separation preserved.
- [x] No LIVE payment claim made.
- [ ] Vercel project created and deployment verified.
- [ ] LIVE Stripe checkout supplied and verified.
- [ ] LIVE domain connected and verified.
- [ ] Customer database/CRM connected.
- [ ] Automated fulfilment connected.
- [ ] Production email automation connected.
- [ ] Paid traffic activated with human approval.

## Operating rule
Never mark a gate complete without evidence from the connected system. Human approval remains required for LIVE payments, payouts, refunds, advertising spend, legal/procurement submissions, and irreversible domain/account changes.
