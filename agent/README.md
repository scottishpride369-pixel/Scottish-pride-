# Business Agent Runtime

The runtime contract for the autonomous business agent.

## Integrations
GitHub, Vercel, Shopify, PostHog, Notion, Dynadot, Ads Manager and communication/automation services.

Credentials belong in platform secrets/environment variables only.

## Runtime pattern
- Event/webhook handlers react immediately.
- A worker/queue executes jobs.
- A 5-minute heartbeat checks health and recovers stalled work.
- GitHub Actions runs scheduled audits and maintenance.
- Every job writes an audit event.
- The agent fails closed when required evidence or credentials are missing.
