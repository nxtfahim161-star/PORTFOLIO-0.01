import { useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { vars } from './hooks'

const palette = [
  { name: 'Deep Violet', hex: '#3C0A8E', note: 'Brand anchor', fg: '#fff' },
  { name: 'Electric Purple', hex: '#5B21D6', note: 'Primary accent', fg: '#fff' },
  { name: 'Magenta', hex: '#E0278A', note: 'Energy, large text only', fg: '#fff' },
  { name: 'Magenta Ink', hex: '#C01873', note: 'Accessible text and buttons', fg: '#fff' },
  { name: 'Coral', hex: '#FC837A', note: 'Warmth and highlights', fg: '#220571' },
  { name: 'Soft Pink', hex: '#FBF4F7', note: 'Calm backgrounds', fg: '#220571' },
  { name: 'Midnight Plum', hex: '#220571', note: 'Dark surfaces and text', fg: '#fff' },
  { name: 'Clean White', hex: '#FFFFFF', note: 'Space and clarity', fg: '#220571' },
]

const lum = (hex: string) => {
  const n = parseInt(hex.slice(1), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}
const grade = (r: number) => (r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA Large only' : 'Decorative only')

const pairs: [string, string][] = [
  ['#FFFFFF', '#3C0A8E'],
  ['#FFFFFF', '#5B21D6'],
  ['#FFFFFF', '#E0278A'],
  ['#FFFFFF', '#C01873'],
  ['#220571', '#FC837A'],
  ['#220571', '#FBF4F7'],
]

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const t = document.createElement('textarea')
      t.value = text
      t.setAttribute('readonly', '')
      t.style.position = 'fixed'
      t.style.opacity = '0'
      document.body.appendChild(t)
      t.select()
      const ok = document.execCommand('copy')
      t.remove()
      return ok
    } catch {
      return false
    }
  }
}

export default function Colors() {
  const [msg, setMsg] = useState('')
  const [done, setDone] = useState('')
  const timer = useRef<number>()

  const onCopy = async (hex: string) => {
    const ok = await copyText(hex)
    setDone(ok ? hex : '')
    setMsg(ok ? `${hex} copied to clipboard` : 'Copy failed. Please select the value manually.')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => { setDone(''); setMsg('') }, 1800)
  }

  return (
    <section id="colors" className="sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow reveal">Colour system</p>
          <h2 className="h2 reveal" style={vars({ '--d': 0.1 })}>Violet depth. Coral warmth.</h2>
          <p className="lead reveal" style={vars({ '--d': 0.2 })}>
            Tap any swatch to copy its HEX value. Pure Magenta is vibrant but fails contrast for small text on white, so we added Magenta Ink for readable labels and buttons.
          </p>
        </div>

        <div className="ratio reveal" role="img" aria-label="Suggested colour proportions: mostly white and pink, with violet, magenta and coral accents">
          {[['#FBF4F7', 34], ['#FFFFFF', 18], ['#220571', 20], ['#5B21D6', 12], ['#E0278A', 9], ['#FC837A', 7]].map(([c, w]) => (
            <i key={c} style={{ background: String(c), flex: Number(w) }} />
          ))}
        </div>

        <div className="swatches">
          {palette.map((c, i) => (
            <button
              key={c.hex}
              className="sw reveal"
              style={{ background: c.hex, color: c.fg, ...vars({ '--d': (i % 4) * 0.07 }) }}
              onClick={() => onCopy(c.hex)}
              aria-label={`Copy ${c.name} ${c.hex}`}
            >
              <span><b>{c.name}</b><small>{c.note}</small></span>
              <span className="hex">
                {c.hex}
                <span>{done === c.hex ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}</span>
              </span>
            </button>
          ))}
        </div>
        <p className="sr" role="status" aria-live="polite">{msg}</p>

        <div className="pairs">
          {pairs.map(([fg, bg]) => {
            const r = ratio(fg, bg)
            return (
              <div className="pair" key={fg + bg} style={{ background: bg, color: fg, border: bg === '#FBF4F7' ? '1px solid rgba(34,5,113,.12)' : undefined }}>
                <span className="aa">Aa</span>
                <small>{r.toFixed(1)}:1<br />{grade(r)}</small>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
    }
