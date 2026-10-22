import { useId, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import { Mark } from './Brand'
import { vars } from './hooks'

function AnimatedMark() {
  const id = useId().replace(/:/g, '')
  return (
    <svg className="amark" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8b5cf6" /><stop offset="1" stopColor="#E0278A" /></linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E0278A" /><stop offset="1" stopColor="#FC837A" /></linearGradient>
      </defs>
      <g className="q1"><path d="M50 6A44 44 0 0 1 94 50L50 50Z" fill={`url(#${id}a)`} /></g>
      <g className="q2"><path d="M50 94A44 44 0 0 1 6 50L50 50Z" fill={`url(#${id}b)`} /></g>
      <circle className="d1" cx="27" cy="27" r="13" fill={`url(#${id}a)`} />
      <circle className="d2" cx="73" cy="73" r="13" fill={`url(#${id}b)`} />
    </svg>
  )
}

const heights = [35, 70, 50, 90, 60, 40, 80, 55, 95, 45, 65, 30]

export default function Motion() {
  const [paused, setPaused] = useState(false)
  const [run, setRun] = useState(0)

  return (
    <section id="motion" className="sec dark grain">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow reveal">Motion identity</p>
          <h2 className="h2 reveal" style={vars({ '--d': 0.1 })}>Built to move.</h2>
          <p className="lead reveal" style={vars({ '--d': 0.2 })}>
            Motion is slow in, confident out. Shapes split and rejoin, gradients drift and content lifts into place. Everything respects reduced-motion settings.
          </p>
          <div className="mo-ctrl">
            <button className="btn btn-ghost" onClick={() => setPaused(!paused)} aria-pressed={paused}>
              {paused ? <Play size={16} /> : <Pause size={16} />} {paused ? 'Play motion' : 'Pause motion'}
            </button>
            <button className="btn btn-ghost" onClick={() => setRun(run + 1)}>
              <RotateCcw size={16} /> Replay reveal
            </button>
          </div>
        </div>

        <div className={`motion-grid${paused ? ' paused' : ''}`}>
          <div className="m-card m-wide reveal"><AnimatedMark /><span className="cap">Animated symbol</span></div>
          <div className="m-card reveal" style={vars({ '--d': 0.08 })}><div className="morph" /><span className="cap">Shape transformation</span></div>
          <div className="m-card reveal">
            <div className="ld" role="img" aria-label="Loading animation preview">
              <svg className="ring-ld" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="6" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="#FC837A" strokeWidth="6" strokeLinecap="round" strokeDasharray="70 210" />
              </svg>
              <Mark size={34} />
            </div>
            <span className="cap">Loading</span>
          </div>
          <div className="m-card reveal" style={vars({ '--d': 0.08 })}><div className="gradshift" /><span className="cap" style={{ zIndex: 1 }}>Gradient transition</span></div>
          <div className="m-card reveal" key={run} style={vars({ '--d': 0.16 })}>
            <div className="rv"><i style={vars({ '--n': 0 })} /><i style={vars({ '--n': 1 })} /><i style={vars({ '--n': 2 })} /></div>
            <span className="cap">Scroll reveal</span>
          </div>
          <div className="m-card m-wide reveal">
            <div className="wave" aria-hidden="true">
              {heights.map((h, i) => <i key={i} style={vars({ '--h': h, '--n': i })} />)}
            </div>
            <span className="cap">Animated pattern</span>
          </div>
        </div>
      </div>
    </section>
  )
      }
