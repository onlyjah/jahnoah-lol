# Static Pages migration

This branch prepares the existing Astro blog for Cloudflare Pages. It does not switch the live domain or remove any Cloudflare resource.

## Build and test

Use Node 22 or later, `npm ci`, then `npm run check`. Output is `dist/`. The build verifies static pages and RSS and rejects Worker runtime output. Cloudflare runtime imports, adapter, Wrangler configuration and generated Worker types are removed from this branch. Existing posts and assets are retained.

## Cloudflare setup

Create a Pages project connected to `onlyjah/jahnoah-lol`. Preview this branch first; use `main` for approved production source after merge. Set the build command to `npm run check`, output directory to `dist`, and Node to 22. No application secrets, database or authentication are required.

Check the Pages preview, all blog links, RSS, sitemap and canonical host before moving the existing custom domain. The source host is `jahnoah.lol`; confirm the domain spelling against the actual Cloudflare zone before attaching it.

Keep the existing Worker and route available for rollback until the Pages custom domain serves successfully. Then remove the superseded Worker route and resource after checking for other consumers. Neither deletion nor DNS changes have happened in this branch.

## Shared backend direction

If interactive member features are added later, connect them to OnlyJah's authenticated API and community services. This static blog does not need a separate Clerk application or Neon database.

Reference: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
