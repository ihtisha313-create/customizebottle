# CustomizeBottle — Water Motion Website

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
- Design direction: premium water-motion / clean corporate

Factory details and an email address are intentionally excluded.

## Pages and resources

- / — Home
- /bottles — Our Bottles
- /industries — Industries
- /how-it-works — How It Works and FAQs
- /portfolio — Filterable illustrative design concepts
- /about — About Us
- /contact — Contact and quotation form
- /privacy-policy — Privacy Policy
- /terms — Terms & Conditions
- /robots.txt and /sitemap.xml — search engine discovery
- /opengraph-image — branded social sharing image
- /manifest.webmanifest — site manifest

## Visual system and performance

The website uses locally rendered CSS and inline SVG water-motion effects: soft water caustics, slow surface waves, ripple rings, light sweeps and a CSS-built bottle illustration. It does not load background video files or stock-photo backgrounds. The effects are decorative, run without external media requests, scale to smaller screens and respect the user's reduced-motion preference.

## Quote form

The form validates the 500-bottle minimum and opens a pre-filled WhatsApp inquiry for the customer to review and send. No database, customer account or online payment is required.

## Local development and build

Use Node.js 22.x.

    npm install
    npm run dev
    npm run typecheck
    npm run lint
    npm run build
    npm run start

## Deployment

The GitHub repository is linked to the Vercel project named customisebottle. Pushes to main trigger a production deployment. The Vercel project is configured for Next.js and Node 22. Preview deployments remain protected; production is configured to be publicly accessible.

The live site currently uses the Vercel address for canonical URLs and the sitemap. The planned custom domain, customisebottle.com, has deliberately not been connected. When it is added to Vercel and its DNS is configured, update siteConfig.domain to the custom domain and redeploy so canonical URLs, metadata and sitemap move together.

## Compliance

The website intentionally avoids unverified manufacturer, certification or laboratory claims. Before accepting orders, verify applicable bottled-water product, manufacturer, food-business licensing and quality requirements.
