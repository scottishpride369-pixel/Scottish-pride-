# Unified Business Command Centre

## Purpose
Single operational dashboard for ULTRON/HERMES.

## Dashboard sections
1. Executive status
2. Revenue and cash
3. Active opportunity
4. Assets
5. Departments/agents
6. Tasks and approvals
7. Shopify connection
8. Domains
9. Automations
10. Evidence vault
11. Alerts / blockers
12. Audit log

## Executive cards
- Current opportunity
- Revenue generated
- Spend approved / used
- Blockers
- Pending approvals
- Verified assets
- Automation health

## Core data objects
Asset, Revenue, Task, Evidence, Automation, Agent, Approval, Opportunity, Integration.

## Safety UI
Every action should display:
TEST or LIVE
estimated cost
approval required?
reversible?
affected system

## MVP acceptance criteria
- mobile-first
- read-only dashboard works without Shopify
- Shopify card clearly shows NOT CONNECTED rather than fabricated data
- approval queue is visible
- no secret values are rendered
- every material metric has an evidence source
