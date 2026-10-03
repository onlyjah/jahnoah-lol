# Reusable animation lane

Magic UI and Aceternity are shadcn-compatible animated component catalogs. This revision uses Motion directly for the small boundary-aware companion component, together with the existing shadcn-style Button. No full animation catalog or WebGL dependency was installed.

Import Companion from src/components/animations:

```tsx
import {Companion} from './components/animations';
<Companion kind="butterfly" label="Butterfly" />
```

For Astro, render with client:visible. Copy the animation folder, the local ui/Button+utils dependencies, its CSS rules and credited public/characters assets into another React-capable project; install motion. Supported unchanged OpenMoji graphics: butterfly, frog, flying saucer. No dragonfly asset was fabricated.

The companion receives its own 66px empty lane along a section border, so it cannot overlap text, links or player controls. Motion drag constraints, no elastic/inertial overshoot, clamping after resize, and keyboard limits use the real container width. This is a bounded horizontal border path, not an arbitrary full-page collision simulation. Left/right/Home/End move it; dragging or keyboard movement stops its automatic stroll at the chosen position until room motion is toggled again. Hide/show is local to that companion.

Automatic strolling observes the shared html[data-motion] control, system reduced motion, viewport intersection and document visibility. It stops during drag, offscreen, in hidden tabs, and when unmounted. Reduced-motion visitors still have manual drag/keyboard controls. Artwork is unchanged and attributed under CC BY-SA 4.0. All art is sourced, not generated.

Checks: static builds and source/type checks are separate from browser gesture/mobile acceptance. Actual pointer/keyboard behavior needs browser review before production. Names of catalogs describe compatibility, not a claim that their components were copied into this project.
