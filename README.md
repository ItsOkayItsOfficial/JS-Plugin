# OAP-Plugin

## Operative Advertising Plugin in VanillaJS

### Intro & Goal
The goal is to create the ability for competitive advertisers in the auto transport space to reduce ad costs by providing competitive pricing options directly to the user after an initial quote request lead form submission (co-op advertising). Through user research, we know that the user will shop for an average of 3 auto transport quotes before booking. This product will attempt to maximize on this need to shop around and provide the quotes directly to the user. The digital product developed will be available for display on participating competitive advertising transporters (co-oper's) after the customer has requested a quote.

### Who's it for?
1. Advertising Auto Transporters - Co-oper's who advertise for themselves in competition with shared lead programs will have the ability to reduce ad costs through widget placement after lead submission
2. The Customer - User will be able to compare transporters and get other quotes directly after lead submission reducing the need to seek other form submissions

### Why build it?
1. Opportunity to generate leads through means other than paid search ads
2. Previous deep knowledge of need of user base matches concept
3. Lead monetization opportunity through lack of ad cost risk
4. Co-op advertiser risk very low

### What are the business requirements?
1. Have the ability to display transporter logos, descriptions and option button to get more quotes
2. Enter phone number or email to get quotes
3. Submit to console

### What are the technical requirements?
Widget: Proof of concept should include a progressive widget with 3 views (show transporters, submit information and thank you confirmation). Javascript needs to be embeddable, inserting into the parent dom. The widget needs to be able to integrate into any parent document (website) without dependencies required by the parent website. The working proof of concept should take no more than 2 hours to complete.

### Issues
- Not as parent style-agnostic as it needs to be
- Would be much more flexible as a browser WC with polyfill
- Static quotes/plugin card body would work better if pulled from API
