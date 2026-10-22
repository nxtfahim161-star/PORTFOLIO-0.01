import { Figure, Mark, QuarterPattern } from './Brand'
import { vars } from './hooks'

const icons: [string, string][] = [
  ['Move', 'M4 12h13M12 6l6 6-6 6'],
  ['Balance', 'M12 4v15M6 20h12M4 8h16M4 8l-2 5h4zM20 8l-2 5h4z'],
  ['Recover', 'M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4'],
  ['Breathe', 'M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0'],
  ['Strength', 'M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12'],
  ['Progress', 'M4 18l5-6 4 3 7-9M15 6h5v5'],
]

const heights = [30, 55, 80, 45, 95, 60, 35, 75, 50, 90, 40, 65, 85, 50, 30, 70]

export default function Graphics() {
  return (
    <section id="graphics" className="sec dark grain">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow reveal">Graphic language</p>
          <h2 className="h2 reveal" style={vars({ '--d': 0.1 })}>Shapes that carry momentum.</h2>
          <p className="lead reveal" style={vars({ '--d': 0.2 })}>
            Quarter-arcs, concentric ripples and rhythmic bars repeat across every surface, so the brand is recognisable even without the logo.
          </p>
        </div>

        <div className="g-grid">
          <div className="g g1 reveal">
            <QuarterPattern a="#5B21D6" b="#E0278A" bg="#220571" cell={44} />
            <span className="cap">Quarter pattern</span>
          </div>
          <div className="g g2 reveal" style={vars({ '--d': 0.08 })}>
            <div className="arcs" />
            <div className="float-shape px" data-speed="0.08" style={{ right: '6%', top: '12%', width: '26%', color: '#fff' }}><Mark mono /></div>
            <span className="cap">Ripple arcs</span>
          </div>

          <div className="g g3 reveal">
            <div className="picto">
              {icons.map(([n, d]) => (
                <div key={n}>
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
                  </span>
                  {n}
                </div>
              ))}
            </div>
            <span className="cap" style={{ color: 'var(--plum)' }}>Pictograms</span>
          </div>

          <div className="g g4 reveal" style={vars({ '--d': 0.08 })}>
            <div className="duo"><Figure /></div>
            <span className="cap">Editorial treatment</span>
          </div>

          <div className="g g5 reveal" style={vars({ '--d': 0.16 })}>
            <big>01</big>
            <p>Repeat the motif. Crop it boldly. Let it bleed off the edge.</p>
            <span className="cap">Rule of rhythm</span>
          </div>

          <div className="g g6 reveal">
            <div className="wave" style={{ color: '#FC837A' }} aria-hidden="true">
              {heights.map((h, i) => <i key={i} style={vars({ '--h': h, '--n': i })} />)}
            </div>
            <span className="cap">Rhythm bars</span>
          </div>
        </div>

        <div className="g-grid" style={{ marginTop: 16 }}>
          <div className="g reveal" style={{ gridColumn: 'span 12', minHeight: 260, background: 'var(--plum)' }}>
            <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
            <span className="cap">Gradient composition</span>
          </div>
        </div>
      </div>
    </section>
  )
      }
