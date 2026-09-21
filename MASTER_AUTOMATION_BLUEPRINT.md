# MASTER AUTOMATION BLUEPRINT

## Objective
Operate the business as an AI-assisted command center with continuous monitoring and human approval for consequential actions.

## Event flows

### Lead
New lead → capture → validate → qualification → assign status → notify → checkout invitation → sales record → fulfilment task.

### Payment
Payment event → verify provider status → create customer record → trigger fulfilment → send onboarding → create support record → request testimonial after successful delivery.

### Website
Scheduled health check → test key routes → test CTA destinations → record result → GREEN/AMBER/RED → create issue if failed.

### Ecommerce
New order → payment verification → fulfilment → customer notification → order status → post-purchase follow-up → analytics event.

### Domains
Enquiry/listing event → asset match → record buyer/enquiry → notify → human approval for negotiation/transfer → evidence record after completion.

### Analytics
Daily metrics → traffic/leads/conversion/revenue summary → compare against baseline → flag anomalies → create task.

### Automation health
Scenario execution → detect failure → log error → retry where safe → alert human after threshold → preserve evidence.

## Safety
Never store API keys, passwords, private keys, seed phrases or payment secrets in GitHub or public documentation.

Never auto-approve contracts, irreversible transfers, account-security changes or material financial commitments.

## Continuous improvement
Every completed task should update:
status → evidence → KPI → next action → automation candidate.

## Reporting
Daily: operational exceptions and revenue activity.
Weekly: CEO review, funnel performance, asset status and automation health.
Monthly: valuation/evidence review, revenue review and system cleanup.
