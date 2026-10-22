import { ArrowRight } from 'lucide-react'
import { Mark } from './Brand'
import { useMagnetic, vars } from './hooks'

export default function Hero() {
  const primary = useMagnetic<HTMLAnchorElement>()
  return (
    <section id="top" className="hero grain">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow fade" style={vars({ '--d': 0.05 })}>Wellness · Movement · Recovery</p>
          <h1 aria-label="Movement, Reimagined.">
            {['Movement,', 'Reimagined.'].map((w, i) => (
              <span className="w" aria-hidden="true" key={w}>
                <span style={vars({ '--i': i })}>{w}</span>
              </span>
            ))}
          </h1>
          <p className="sub fade" style={vars({ '--d': 0.6 })}>
            MOTIONFORM is built on a simple belief: the way we move shapes the way we feel. Our identity brings precision and human warmth together, one confident step at a time.
          </p>
          <div className="hero-cta fade" style={vars({ '--d': 0.8 })}>
            <a ref={primary} href="#about" className="btn btn-primary">
              Explore the Identity <ArrowRight size={18} />
            </a>
            <a href="#system" className="btn btn-ghost">View Brand System</a>
          </div>
          <div className="hero-meta fade" style={vars({ '--d': 1 })} aria-hidden="true">
            <span>01 Identity</span><span>02 System</span><span>03 Motion</span>
          </div>
        </div>

        <div className="hero-art fade" style={vars({ '--d': 0.3 })} aria-hidden="true">
          <span className="orb o1" />
          <span className="orb o2" />
          <span className="ring r1" />
          <span className="ring r2" />
          <div className="layer back"><Mark mono size="100%" /></div>
          <div className="layer mid"><Mark size="78%" /></div>
          <div className="layer front"><Mark mono size="30%" /></div>
        </div>
      </div>
    </section>
  )
          }
