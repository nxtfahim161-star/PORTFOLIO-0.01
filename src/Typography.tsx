import { vars } from './hooks'

export default function Typography() {
  return (
    <section id="type" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow reveal">Typography</p>
          <h2 className="h2 reveal" style={vars({ '--d': 0.1 })}>Manrope, from whisper to shout.</h2>
          <p className="lead reveal" style={vars({ '--d': 0.2 })}>
            One contemporary sans-serif across the whole identity. Heavy, tightly tracked headlines bring energy. Lighter weights and open spacing keep body copy calm and readable.
          </p>
        </div>

        <div className="type-hero reveal" aria-hidden="true">Aa</div>

        <div className="type-grid">
          <div className="card ty-weights reveal">
            <span className="label">Weights</span>
            {[300, 400, 500, 600, 700, 800].map((w) => (
              <div className="wrow" key={w} style={{ fontWeight: w }}>
                <span>Movement</span><small>{w}</small>
              </div>
            ))}
          </div>

          <div className="card hier ty-hier reveal" style={vars({ '--d': 0.08 })}>
            <span className="label">Hierarchy</span>
            <div className="eyebrow">Recovery programme</div>
            <h4>Strong foundations, softer landings.</h4>
            <p>Body copy is set at a comfortable 1.55 line height so longer reading stays effortless on any screen.</p>
            <span className="cap">Caption · Updated weekly · 6 min read</span>
          </div>

          <div className="card dk ty-num reveal">
            <span className="label">Numerals · tabular</span>
            <div className="nums">
              <div>98%<small>Felt better</small></div>
              <div>24/7<small>Guided access</small></div>
              <div>3.5×<small>Faster recovery</small></div>
              <div>01—03<small>Daily steps</small></div>
            </div>
          </div>

          <div className="card track ty-track reveal" style={vars({ '--d': 0.08 })}>
            <span className="label">Letter spacing</span>
            <p style={{ letterSpacing: '-0.05em' }}>Move Better <small>−5% · DISPLAY</small></p>
            <p style={{ letterSpacing: 0 }}>Feel More <small>0 · BODY</small></p>
            <p style={{ letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '1rem' }}>Recover Daily <small>+18% · LABEL</small></p>
          </div>
        </div>
      </div>
    </section>
  )
}
