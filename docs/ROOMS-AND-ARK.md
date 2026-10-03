# Three rooms and the Ark bridge

## Implemented
Bloom / Orbit / Canopy are static router pages, not anchor tabs. Bloom uses pink/blue pastels, subtle rainbow background tones, NASA's Earth photograph and KuuJah's Left Behind. Orbit uses solarpunk/hyperspace colors and NASA/ESA/CSA/STScI Carina photography, with Soapy Butterfly, Adam's Ribs and the verified MIDI demo as exclusive player choices. Canopy uses a recovering-world palette and NASA South Florida photograph, local frog/cricket recordings and Jah Noah's all is one video. Quoted words are exact selected excerpts.

React islands reuse the existing cva/shadcn-style Button, with custom room colors. CSS perspective transforms provide lightweight 3D layers; no continuous WebGL render loop, generated scenery or synthesized audio. Motion starts after hydration only when reduced motion is not requested; a visible pause toggle stops the room layers. Players load on selection; they do not autoplay. Switching the selected embedded item unmounts its previous player. Native audio is preload-none and offers explicit repeat; the frog and cricket clips are original NPS recordings. Cricket provenance is California, not Florida.

## Lyrics
Left Behind's SoundCloud description contains only “Inspired by art.” Jah supplied the original lyrics on October 3, 2026. src/content/lyrics/left-behind.txt now renders in Bloom. Explicit self-corrections were applied; uncertain dictated phrases are preserved and listed in docs/LYRICS-REVIEW.md. No generated lyrics. Source song IDs were verified from SoundCloud's own public metadata.

## Growing the journal
Place user-written Markdown in src/content/journal. Frontmatter: title, date, room (Bloom|Orbit|Canopy), kind (poetry|photo|note|music), draft. Public build omits draft:true. Each room shows its assigned published entries. Keep assets in public/images with provenance/permission recorded; copy quotations exactly with a source link. Existing entries are explicitly source excerpts, not invented full articles. Add original poems/photos as Jah supplies them. Keywords are room labels from Jah's brief, not claims about unpublished lyrics.

## Ark boundaries
These three clients link to one another. Cross-platform authentication and content synchronization are not newly implemented by these links. Preserve existing OnlyJah auth and backend work; conceptual shared identity is not proof of cross-domain SSO. Next contract: stable work IDs, author attribution, license, media variants, published/draft state, room/topic tags, revision, authoritative source and cache behavior. Pull only publications authorized for public distribution. Never copy private Forge drafts, credentials or whole personal buckets into static output.

A signed webhook may request a rebuild after a human publication; authentication, quotas, deduplication, webhook verification and deployment credentials belong to the separate trusted backend. Payments remain a separate verified provider connection; the present footer leads to Jah Noah's professional site without fabricated products/prices/checkout.
