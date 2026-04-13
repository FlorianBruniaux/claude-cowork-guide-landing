import type { APIRoute } from 'astro'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const GET: APIRoute = async () => {
  const stats = [
    { value: '28', label: 'WORKFLOWS' },
    { value: '70+', label: 'PROMPTS' },
    { value: '7', label: 'GOLDEN RULES' },
    { value: '13', label: 'FAQ' },
  ]

  const fontPath = resolve(
    __dirname,
    '../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'
  )
  const fontData: ArrayBuffer = readFileSync(fontPath).buffer as ArrayBuffer

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          padding: '60px',
        },
        children: [
          // Grid overlay
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle, #ffffff08 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              },
            },
          },
          // Pill badge
          {
            type: 'div',
            props: {
              style: {
                background: '#21262d',
                border: '1px solid #30363d',
                borderRadius: '20px',
                padding: '6px 16px',
                color: '#e6edf3',
                fontSize: '14px',
                letterSpacing: '0.08em',
                fontWeight: 600,
                marginBottom: '24px',
              },
              children: 'FREE & OPEN SOURCE',
            },
          },
          // Title
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '12px',
              },
              children: [
                {
                  type: 'span',
                  props: {
                    style: { fontSize: '72px', fontWeight: 800, color: '#e6edf3', lineHeight: 1.1 },
                    children: 'Claude Cowork',
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: { fontSize: '72px', fontWeight: 800, color: '#6366f1', lineHeight: 1.1 },
                    children: 'Guide',
                  },
                },
              ],
            },
          },
          // Subtitle
          {
            type: 'div',
            props: {
              style: {
                fontSize: '20px',
                color: '#8b949e',
                marginBottom: '40px',
                textAlign: 'center',
              },
              children: 'Master Claude Desktop as your AI work assistant',
            },
          },
          // Stats row
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                gap: '16px',
                marginBottom: '40px',
              },
              children: stats.map(({ value, label }) => ({
                type: 'div',
                props: {
                  style: {
                    background: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: '10px',
                    padding: '16px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '210px',
                  },
                  children: [
                    {
                      type: 'span',
                      props: {
                        style: { fontSize: '36px', fontWeight: 800, color: '#6366f1', lineHeight: 1.2 },
                        children: value,
                      },
                    },
                    {
                      type: 'span',
                      props: {
                        style: { fontSize: '13px', color: '#8b949e', letterSpacing: '0.1em', fontWeight: 500, marginTop: '4px' },
                        children: label,
                      },
                    },
                  ],
                },
              })),
            },
          },
          // FB. footer left
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '36px',
                left: '48px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              },
              children: [
                { type: 'span', props: { style: { fontSize: '28px', fontWeight: 800, color: '#c0522a', letterSpacing: '-0.02em' }, children: 'FB.' } },
                { type: 'span', props: { style: { fontSize: '16px', color: '#8b949e', fontWeight: 400 }, children: 'florian.bruniaux.com' } },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Inter', data: fontData, weight: 400, style: 'normal' }],
    }
  )

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })
  const png = resvg.render().asPng()

  return new Response(png.buffer as ArrayBuffer, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' },
  })
}
