import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Brand'
import { useMagnetic } from './hooks'

const links: [string, string][] = [
  ['Work', '#work'],
  ['Brand System', '#system'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const cta = useMagnetic<HTMLAnchorElement>()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <nav className={`nav${solid || open ? ' solid' : ''}`} aria-label="Primary">
      <div className="wrap">
        <a href="#top" aria-label="MOTIONFORM home">
          <Logo tone="onDark" />
        </a>
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div id="menu" className={`nav-links${open ? ' open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a ref={cta} href="#contact-form" className="btn btn-light" onClick={() => setOpen(false)}>
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  )
      }
