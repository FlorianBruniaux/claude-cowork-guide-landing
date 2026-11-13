# Fonts for the OG image

Satori, which renders `src/pages/og-image.png.ts`, reads TTF, OTF or WOFF but not WOFF2, so the site subsets in `public/fonts/brand/` cannot be used here.

These three files are byte-for-byte copies of `florian-portfolio@376d69b7` `public/fonts/brandbook/*.ttf`. They are read at build time only and are not served.

Licences (SIL Open Font License 1.1): `public/fonts/brand/LICENSES.txt`, `OFL-Barlow.txt`, `OFL-IBM-Plex-Sans.txt`, `OFL-IBM-Plex-Mono.txt`.
