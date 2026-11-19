// Site photography: size and alt text for each image in public/images.
// Each photo has a .jpg original, a .webp version and (if wider than 900px) an -800.webp for phones.
// When adding a photo, add an entry here so it gets alt text and the right dimensions.
export const images: Record<string, { width: number; height: number; alt: string }> = {
  'construction-bushland-timber': { width: 1280, height: 672, alt: 'Two-storey timber-clad home under construction on a bushland block' },
  'construction-split-level-concrete': { width: 1164, height: 720, alt: 'Split-level home under construction with concrete footings and retaining' },
  'construction-timber-frame-glazing': { width: 1280, height: 655, alt: 'Timber-framed home under construction with large windows installed' },
  'construction-timber-frame-upper': { width: 1280, height: 669, alt: 'Timber-framed upper level being built on a new home' },
  'construction-two-storey-brick': { width: 1280, height: 669, alt: 'Two-storey brick home under construction with scaffolding' },
  'construction-two-storey-render': { width: 1280, height: 667, alt: 'Double-storey rendered home under construction in Adelaide' },
  'hero-poster': { width: 1272, height: 648, alt: 'Blueprint drawing of a modern home' },
  'home-contemporary-pool': { width: 1280, height: 720, alt: 'Contemporary two-storey home with a pool and landscaped garden' },
  'home-single-storey-glass': { width: 1280, height: 666, alt: 'Single-storey home with floor-to-ceiling glass and open-plan living' },
  'home-timber-clad-mountains': { width: 1600, height: 828, alt: 'Modern timber-clad home with large windows' },
  'home-two-storey-timber': { width: 1280, height: 669, alt: 'Completed two-storey home with timber cladding and a landscaped lawn' },
  'interior-formal-living': { width: 1168, height: 720, alt: 'Formal living room with high ceilings, chandelier and fireplace' },
  'interior-living-kitchen': { width: 1177, height: 675, alt: 'Open-plan living room and kitchen with high ceilings' },
  'interior-living-sliding-doors': { width: 1156, height: 720, alt: 'Living area opening to the garden through sliding glass doors' },
  'interior-open-plan-extension': { width: 1280, height: 672, alt: 'Open-plan living and dining extension with raked ceiling' },
  'interior-open-plan-living-pool': { width: 1280, height: 668, alt: 'Open-plan living and kitchen overlooking a pool' },
  'interior-timber-beams-stair': { width: 1280, height: 665, alt: 'Interior with exposed timber beams and a floating staircase' },
};

/** Looks up a photo by its public path, e.g. '/images/home-two-storey-timber.jpg'. */
export function imageInfo(src: string) {
  const name = src.replace(/^\/images\//, '').replace(/\.(jpg|webp)$/, '');
  return { name, ...(images[name] ?? { width: undefined, height: undefined, alt: '' }) };
}
