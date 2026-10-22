import { Figure } from './Brand'
import { vars } from './hooks'

const pillars = [
  ['01', 'Movement', 'Every shape in the identity points forward, because progress is never still.'],
  ['02', 'Balance', 'Opposing forms sit in harmony: bold and calm, precise and warm.'],
  ['03', 'Progress', 'Small, repeatable steps build the pattern language of the brand.'],
  ['04', 'Wellbeing', 'People come first. Colour, type and motion are tuned to feel human.'],
]

export default function Intro() {
  return (
    <section id="about" className="sec intro">
      <div className="wrap two">
        <div>
          <p className="eyebrow reveal">Brand introduction</p>
          <h2 className="h2 reveal" style={vars({ '--d': 0.1 })}>A New Language for Human Movement.</h2>
          <div className="frame reveal px" data-speed="0.04" style={vars({ '--d': 0.2 })}>
            <Figure />
          </div>
        </div>
        <div className="intro-right">
          <p className="lead reveal">
            MOTIONFORM began with a question: what if recovery felt as energising as training? The identity answers with a mark built from two rising arcs and two anchoring points, a symbol that moves forward while staying grounded.
          </p>
          <p className="lead reveal" style={vars({ '--d': 0.1 })}>
            Rich violets meet warm coral. Oversized type sits beside generous white space. Every detail is designed to make wellbeing feel optimistic, modern and within reach.
          </p>
          <div className="pillars">
            {pillars.map(([n, t, d], i) => (
              <div className="pillar reveal" key={n} style={vars({ '--d': i * 0.08 })}>
                <b>{n}</b>
                <div><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
