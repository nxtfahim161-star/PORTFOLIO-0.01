import { vars } from './hooks'

const items = [
  { n: '01', t: 'Movement', q: 'Every detail moves the experience forward.', d: 'M4 12h13M12 6l6 6-6 6' },
  { n: '02', t: 'Balance', q: 'Precision meets human warmth.', d: 'M12 4v15M6 20h12M4 8h16M4 8l-2 5h4zM20 8l-2 5h4z' },
  { n: '03', t: 'Progress', q: 'Small steps create meaningful change.', d: 'M4 18l5-6 4 3 7-9M15 6h5v5' },
]

export default function Principles() {
  return (
    <section id="principles" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow reveal">Brand principles</p>
          <h2 className="h2 reveal" style={vars({ '--d': 0.1 })}>Three ideas. One direction.</h2>
        </div>
        <div style={{ marginTop: '3rem' }}>
          {items.map((p) => (
            <div className="pr" key={p.n}>
              <div className="pr-n reveal" aria-hidden="true">{p.n}</div>
              <div className="reveal" style={vars({ '--d': 0.12 })}>
                <div className="pr-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={p.d} /></svg>
                </div>
                <h3>{p.t}</h3>
                <blockquote>“{p.q}”</blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
