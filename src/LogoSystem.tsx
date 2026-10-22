import { useState } from 'react'
import { Logo, Mark, QuarterPattern, type Tone } from './Brand'
import { vars } from './hooks'

const stages = {
  light: { label: 'Light', tone: 'color' },
  dark: { label: 'Dark', tone: 'onDark' },
  brand: { label: 'Gradient', tone: 'white' },
  mono: { label: 'Mono', tone: 'black' },
} as const satisfies Record<string, { label: string; tone: Tone }>

type K = keyof typeof stages

function Construction() {
  return (
    <svg viewBox="-12 -12 124 124" role="img" aria-label="Logo construction grid showing circles and alignment guides">
      <g stroke="rgba(255,255,255,.35)" strokeWidth=".5" strokeDasharray="2 2" fill="none">
        <path d="M6 -8V108M50 -8V108M94 -8V108M-8 6H108M-8 50H108M-8 94H108" />
        <circle cx="50" cy="50" r="44" />
        <circle cx="27" cy="27" r="13" />
        <circle cx="73" cy="73" r="13" />
        <path d="M-8 -8L108 108M108 -8L-8 108" />
      </g>
      <g fill="none" stroke="#FC837A" strokeWidth="1.4" strokeLinejoin="round">
        <path d="M50 6A44 44 0 0 1 94 50L50 50Z" />
        <path d="M50 94A44 44 0 0 1 6 50L50 50Z" />
        <circle cx="27" cy="27" r="13" />
        <circle cx="73" cy="73" r="13" />
      </g>
      <g fill="#fff" fontSize="4.5" fontWeight="700" fontFamily="Manrope, sans-serif">
        <text x="52" y="-3">x</text>
        <text x="96" y="48">x</text>
      </g>
    </svg>
  )
}

export default function LogoSystem() {
  const [k, setK] = useState<K>('light')
  return (
    <section id="system" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow reveal">Logo and symbol system</p>
          <h2 className="h2 reveal" style={vars({ '--d': 0.1 })}>One symbol. Every context.</h2>
          <p className="lead reveal" style={vars({ '--d': 0.2 })}>
            The mark pairs two rising quarter-arcs with two anchoring points. It scales from a favicon to a billboard and holds up in colour, mono and reversed.
          </p>
        </div>

        <div className="stage-wrap reveal">
          <div className="tabs" role="group" aria-label="Preview the logo on different backgrounds">
            {(Object.keys(stages) as K[]).map((key) => (
              <button key={key} className="tab" aria-pressed={k === key} onClick={() => setK(key)}>
                {stages[key].label}
              </button>
            ))}
          </div>
          <div className="stage" data-bg={k}>
            <Logo key={k} tone={stages[k].tone} tagline />
          </div>
        </div>

        <div className="sys-grid">
          <div className="tile t-primary reveal"><Logo tone="color" /><span className="cap">Primary logo</span></div>
          <div className="tile t-second reveal" style={vars({ '--d': 0.08 })}><Logo tone="color" stack tagline /><span className="cap">Secondary logo</span></div>
          <div className="tile t-symbol reveal"><Mark mono size="58%" /><span className="cap">Standalone symbol</span></div>
          <div className="tile t-grid reveal" style={vars({ '--d': 0.08 })}><Construction /><span className="cap">Construction grid</span></div>
          <div className="t-mono reveal" style={vars({ '--d': 0.16 })}>
            <div className="tile" style={{ background: '#fff', fontSize: '1.1rem' }}><Logo tone="black" /><span className="cap">Mono · black</span></div>
            <div className="tile" style={{ background: '#111', fontSize: '1.1rem' }}><Logo tone="white" /><span className="cap">Mono · white</span></div>
          </div>
          <div className="tile t-pattern reveal">
            <QuarterPattern a="#5B21D6" b="#E0278A" bg="#FBF4F7" cell={48} />
            <span className="cap" style={{ background: '#fff', padding: '4px 10px', borderRadius: 99, left: 16 }}>Supporting pattern</span>
          </div>
        </div>
      </div>
    </section>
  )
      }
