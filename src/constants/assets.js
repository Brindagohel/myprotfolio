// Asset definitions with safe fallbacks
// Requirements: Use reference/hero_img.png and reference/cut_out (1).png

export const ASSETS = {
  // Direct public web paths for guaranteed zero-build-break loading
  heroBg: '/assets/hero_img.png',
  portraitCutout: '/assets/cut_out.png',
  
  // Also provide paths matching the exact folder name
  referenceHero: '/reference/hero_img.png',
  referenceCutout: '/reference/cut_out (1).png',
}

export default ASSETS
