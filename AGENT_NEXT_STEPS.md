# Activation checklist

1. Connect the production application/worker to this repository.
2. Configure secrets in the hosting platform — never commit them.
3. Connect Shopify, Vercel, PostHog, Notion, Dynadot and communication/automation services.
4. Implement webhook/event ingestion and the approval queue.
5. Implement bounded retries and dead-letter handling.
6. Add monitoring and alerts.
7. Run end-to-end tests in sandbox/test mode.
8. Verify the £199 payment path separately from live money.
9. Enable production autonomous actions only after verification.

The repository contains the operating contract and safe control plane. It does not itself create a continuously running AI worker or grant access to external accounts.
