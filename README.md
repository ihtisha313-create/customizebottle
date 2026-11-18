# CustomizeBottle — Phase 1

Premium B2B website for customized drinking-water bottle supply.

## Confirmed project details

- Brand: CustomizeBottle
- Production domain: https://customisebottle.com
- Contact / quotation WhatsApp: +92 346 888 9433
- Product featured in Phase 1: 500 ml customized bottled water
- Minimum order: 500 bottles
- Supply model: filled, capped, sealed and custom-labelled bottles
- Initial service location: Peshawar, Pakistan
- Language: English
- Design direction: premium corporate

Factory details and an email address are intentionally excluded from the website.

## Phase 1 pages

- / — Home
- /bottles — Our Bottles
- /industries — Industries
- /contact — Contact and quotation form

The quotation form validates the 500-bottle minimum and opens a pre-filled WhatsApp message. No database or customer account is required for this phase.

## Local development

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## GitHub and Vercel

1. Import this repository into Vercel.
2. Vercel should detect Next.js automatically; use the project root as the root directory.
3. Add customisebottle.com to the Vercel project's Domains settings and follow the DNS instructions shown by Vercel and your domain registrar.
4. Confirm the production deployment and test all WhatsApp links and inquiry form fields.

The domain is configured in the site metadata as https://customisebottle.com. Connect the domain only after confirming you control its registration and can edit its DNS records.

## Images

The hero uses a clear-bottle product photo hosted on Unsplash. Hospitality, restaurant, healthcare and event imagery also uses Unsplash image URLs. Review the photo licensing terms and consider locally hosting approved images before launch.

## Important launch note

Before accepting orders, verify the applicable bottled-water product, manufacturer and food-business licensing / quality requirements. The website does not make claims about certificates, laboratory test results, regulatory approvals or factory identity.
