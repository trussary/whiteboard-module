/**
 * Ambient declarations for the non-code assets this package imports.
 *
 * Excalidraw imports its bundled fonts directly (`import url from
 * "./Excalifont-Regular-….woff2"`) and lets esbuild's `file` loader turn each
 * one into a URL string. esbuild does not need a type for that; `tsc` does, and
 * without one every single font import is a `TS2307 Cannot find module` — 220
 * of the 277 errors the declaration pass produced before this file existed.
 *
 * That noise is not harmless. The declaration pass is how `dist/types` is
 * produced, and a 277-line error list is one nobody reads, which is exactly how
 * a real type error in EasyTeach's own additions would go unnoticed. With this
 * file the list is 47 and the remaining entries are pre-existing upstream
 * looseness, so a new entry stands out.
 */

declare module "*.woff2" {
  const url: string;
  export default url;
}
