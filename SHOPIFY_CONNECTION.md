# Shopify Connection Handoff

## Human action required
Connect the chosen Shopify store/API credentials in the authorised integration.

Required values:
- Shopify store name
- Shopify store URL
- API credential/token created with the minimum required permissions

## Do not put credentials here
This file is documentation only. Never paste the API secret/token into GitHub, Notion pages, chat logs intended as permanent records, or source code.

## After connection
ULTRON should verify, in read-only/test mode first:
1. store identity
2. product read access
3. order read access
4. customer access only if actually required
5. webhook/integration capability if supported
6. test/live separation

Then record only non-secret evidence:
store name, URL, connection status, scopes/permissions at a high level, timestamp and verification result.

## Current status
BLOCKED ON HUMAN SHOPIFY CONNECTION.
