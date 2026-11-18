# CustomizeBottle — Phase 1, 2 and 3

Premium B2B website for customized drinking-water bottle supply.

## Confirmed business details

- Brand: CustomizeBottle
- Current live address and canonical domain: https://customizebottle.vercel.app
- Planned custom domain: https://customisebottle.com (not connected yet)
- WhatsApp: +92 346 888 9433
- Starting product: 500 ml customized bottled water
- Minimum order: 500 bottles
- Supply model: filled, capped, sealed and custom-labelled bottles
- Initial service area: Peshawar, Pakistan
- Language: English
- Design direction: premium corporate

Factory details and an email address are intentionally excluded.

## Pages and resources

- / — Home
- /bottles — Our Bottles
- /industries — Industries
- /how-it-works — How It Works and FAQs
- /portfolio — Filterable illustrative design concepts (not claimed customer projects)
- /about — About Us
- /contact — Contact and quotation form
- /privacy-policy — Privacy Policy
- /terms — Terms & Conditions
- /robots.txt and /sitemap.xml — search engine discovery
- /opengraph-image — branded social sharing image
- /manifest.webmanifest — site manifest

## Quote form

The form validates the 500-bottle minimum and opens a pre-filled WhatsApp inquiry for the customer to review and send. No database, customer account or online payment is required.

## Local development and build

Requirements: Node.js 20.9 or later and npm.

    npm install
    npm run dev
    npm run build
    npm run start

## Deployment

The GitHub repository is linked to the Vercel project named customisebottle. Pushes to main trigger a production deployment. The Vercel project is configured for Next.js and Node 22. Preview deployments remain protected; production is configured to be publicly accessible.

The live site currently uses the Vercel address for canonical URLs and the sitemap. The planned custom domain, customisebottle.com, has deliberately not been connected. When it is added to Vercel and its DNS is configured, update siteConfig.domain to the custom domain and redeploy so canonical URLs, metadata and sitemap move together.

## Performance and security

- Next Image optimization is enabled for Unsplash photography.
- AVIF and WebP output formats are enabled.
- Security response headers are configured in Next.js.
- The site includes a skip-to-content link and a custom not-found page.
- A custom Open Graph image is generated for social previews.

## Images and compliance

Unsplash image URLs are used for natural photography. Portfolio items are illustrative concepts, not completed customer projects or endorsements. Review image terms and locally host approved assets if preferred.

Before accepting orders, verify the applicable bottled-water product, manufacturer and food-business licensing and quality requirements. The site makes no unverified certification or laboratory claims.
