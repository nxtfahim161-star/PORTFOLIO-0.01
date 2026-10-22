import { Dribbble, Instagram, Linkedin } from 'lucide-react'
import { Logo } from './Brand'
import { vars } from './hooks'

const nav: [string, string][] = [
  ['Work', '#work'], ['Brand System', '#system'], ['Colour', '#colors'], ['Typography', '#type'],
  ['Motion', '#motion'], ['About', '#about'], ['Contact', '#contact'],
]
const social = [
  { n: 'Instagram', I: Instagram },
  { n: 'Dribbble', I: Dribbble },
  { n: 'LinkedIn', I: Linkedin },
]

export default function Footer() {
  return (
    <footer className="foot dark">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo tone="onDark" tagline />
            <p>An original, fictional brand identity for movement, balance and recovery. Designed as a case study.</p>
          </div>
          <nav aria-label="Footer">
            <h5>Explore</h5>
            <ul>{nav.map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
          </nav>
          <div>
            <h5>Follow</h5>
            <div className="socials">
              {social.map(({ n, I }) => (
                <a key={n} href="#top" aria-label={`${n} (placeholder link)`} onClick={(e) => e.preventDefault()}>
                  <I size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="foot-word" aria-hidden="true">MOTIONFORM</div>
        <div className="foot-bar">
          <span>© {new Date().getFullYear()} MOTIONFORM. All rights reserved.</span>
          <span className="mini-wave" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => <i key={i} style={vars({ '--n': i })} />)}
          </span>
        </div>
      </div>
    </footer>
  )
          }
