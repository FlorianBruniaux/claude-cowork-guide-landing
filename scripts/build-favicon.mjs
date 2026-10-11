import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resvg } from '@resvg/resvg-js'

const SIZES = [32, 16]

/** ICO container (PNG payloads, supported since Vista) with one image per size in SIZES. */
export function buildIco(svg) {
  const images = SIZES.map(size => new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng())
  const header = Buffer.alloc(6)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)
  let offset = header.length + images.length * 16
  const directory = images.map((png, i) => {
    const entry = Buffer.alloc(16)
    entry[0] = SIZES[i]
    entry[1] = SIZES[i]
    entry.writeUInt16LE(1, 4) // colour planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(png.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += png.length
    return entry
  })
  return Buffer.concat([header, ...directory, ...images])
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const svg = readFileSync(new URL('../public/favicon.svg', import.meta.url))
  const out = new URL('../public/favicon.ico', import.meta.url)
  writeFileSync(out, buildIco(svg))
  console.log(`Wrote ${fileURLToPath(out)}`)
}
