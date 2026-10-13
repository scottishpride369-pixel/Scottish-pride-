# Whole-company remediation audit — 2026-10-13

## Operating rule
ONE REVENUE OPPORTUNITY → COMPLETE → LAUNCH → GET PAID → STABILISE → AUTOMATE → NEXT.
£0 new spend. No transfers, paid subscriptions, loan applications, legal filings, trust asset transfers, or irreversible changes without the required explicit approval. Never claim live/paid/fulfilled/connected without evidence.

## Verified findings
- Make organization exists in eu1.make.com. Team 2287342 contains: "Stripe Payments to Airtable" (inactive, webhook trigger, Stripe and Airtable modules but no connections shown); "Integration Airtable" (inactive, scheduled every 15 minutes, Airtable connection status ok); "ARCHIVE — Duplicate — Company OS New Enquiry" (inactive). Team 2287343 contains "ULTRON — Opportunity Intake & AI Qualification" (inactive, webhook-only, one module only; no AI qualification or downstream action exists yet).
- GitHub account scottishpride369-pixel has write/admin access to public repository scottishpride369-pixel/Scottish-pride-. The other connected GitHub account returned no repositories. The intended BrianCloy/Ultron repository was not found through the attempted read, so do not claim it is connected.
- Shopify store connected as "Children safty": last-30-day analytics showed 46 sessions, 2 orders, £0 net sales, 5 sessions with cart additions, 5 reaching checkout, and 1 completed checkout. Order #1002 was £10.49 and refunded with fulfilment request declined. Order #1001 was £0 and marked paid/fulfilled; it must not count as revenue without payment evidence.
- Product search found two active products with unverified supplier/fulfilment evidence and implausibly high inventory quantities: Baby Changing Bag Backpack (450,000) and Baby Winter Jumpsuit (950,000). Both were changed to DRAFT on 2026-10-13 to prevent new unfulfillable sales. Their supplier status, cost, UK delivery, and stock still need verification before reactivation.
- Notion master asset register and monetisation control board exist. The current internal £89,565 value is explicitly a working estimate, not a verified valuation. Finance pack says no loan application submitted and ownership evidence is incomplete.
- Cloys Recovery Trust deed is recorded as draft/not signed in existing user context. Do not represent it as executed, registered, or owning assets until documentary evidence confirms those states.

## NOW — first revenue
1. Finish the North & Mind £149.99 Business Automation Audit customer path.
2. Verify correct Stripe account, payment link, product amount, success/failure/refund state and business identity.
3. Connect Stripe successful-payment event to Airtable with valid account/base/table and mapped fields; current scenario has no module configs/connections shown, so do not activate until configured and tested.
4. Confirm Airtable only creates a record for a confirmed successful payment; prevent duplicates by Stripe payment/session ID; include customer, product, amount, currency, status, timestamps and fulfilment state.
5. Build customer onboarding and delivery steps; send no customer outreach automatically until consent and content are confirmed.
6. Run a safe test-mode test if available, then one live end-to-end test only when it will not create an unapproved charge or customer commitment. Capture evidence.

## SUPPORTING — platform remediation
- Make: configure Stripe Payments to Airtable; review Integration Airtable mapping, especially search/update/create sequence and destination table; leave inactive until tested.
- ULTRON: Opportunity Intake scenario is webhook-only. Add schema validation, deduplication, qualification logic, safe logging and downstream destination; configure AI model/API only if existing no-cost authorised access is available.
- GitHub: establish canonical ULTRON repository and owner; repository search did not verify BrianCloy/Ultron. Add CI checks, secrets scanning, documented environment variables, health checks, and deployment verification. Never commit secrets.
- Shopify/eBay: audit all active listings for supplier URL stored in Shopify, live stock evidence, UK delivery, total landed cost, margin and automatic fulfilment. Draft any listing without verified evidence. Do not publish or list unverified child safety products.
- Track stock conservatively (one available if that is the operating rule) only when the supplier can prove availability; do not use large placeholder inventory quantities.

## HOLD — legal, trust and finance
- Review Cloys Recovery Trust draft with a Scottish solicitor before signing or transferring assets.
- Determine HMRC Trust Registration Service eligibility from the actual trust terms, trustees, assets and tax position; register only if required, and record reference/evidence. Official guidance: https://www.gov.uk/guidance/check-if-you-need-to-register-a-trust
- Build asset-by-asset ownership evidence: legal owner, proof, acquisition cost, current value basis, proposed transfer, tax consequences, and trust/company/personal classification. No ownership transfer or lender security claim without advice and documents.
- £89,565 valuation remains unverified; prepare evidence-based schedule and separate gross estimates from realised revenue.
- No loan applications, borrowing, guarantees, or security grants without specific approval.

## Other assets — verify before spending effort
- Domain portfolio (including aiplugins.net, bitonchain.xyz, evcharginghub.co, extensibility.xyz and other listed domains): verify registrar ownership, expiry, renewal cost, market demand, listing/landing page and choose SELL / LEASE / BUILD / HOLD / DROP.
- KDP storybook pipeline and digital product assets: keep in draft until file rights, metadata, price, delivery and publishing requirements are checked.
- Other Shopify stores, social identities, software and websites: verify access, recurring costs, actual traffic/revenue and assign one purpose each. Do not create duplicates.
- Re-enable ULTRON Daily Revenue Push only after its exact existing scenario is identified, connections validated, and the scenario can run without spending or risky writes.

## Definition of done
Correct → Complete → Connected → Working → Live → Measured → Evidence Captured.
For every task record status, owner, blocker, next action, evidence URL, last checked date and cost. Do not label an item complete merely because a draft, account, repository or workflow exists.
