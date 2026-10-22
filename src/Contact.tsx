import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { QuarterPattern } from './Brand'
import { CONTACT_EMAIL } from './config'
import { useMagnetic, vars } from './hooks'

export default function Contact() {
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null)
  const cta = useMagnetic<HTMLAnchorElement>()

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const f = new FormData(form)
    const name = String(f.get('name') || '').trim()
    const email = String(f.get('email') || '').trim()
    const msg = String(f.get('msg') || '').trim()

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || msg.length < 5) {
      setStatus({ ok: false, msg: 'Please add your name, a valid email and a short message.' })
      return
    }
    if (CONTACT_EMAIL) {
      const subject = encodeURIComponent(`Project enquiry from ${name}`)
      const body = encodeURIComponent(`${msg}\n\n${name} · ${email}`)
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      setStatus({ ok: true, msg: 'Opening your email app…' })
    } else {
      setStatus({ ok: true, msg: `Thanks, ${name}! This demo form is not connected yet. Set CONTACT_EMAIL in src/config.ts to enable it.` })
      form.reset()
    }
  }

  return (
    <section id="contact" className="contact violet grain" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="deco px" data-speed="0.05" aria-hidden="true"><QuarterPattern a="#ffffff" b="#FC837A" cell={56} /></div>
      <div className="wrap two">
        <div>
          <p className="eyebrow reveal">Let’s talk</p>
          <h2 className="big-h reveal" style={{ marginTop: '1rem', ...vars({ '--d': 0.1 }) }}>
            Let’s Build Something <em>That Moves.</em>
          </h2>
          <div className="hero-cta reveal" style={vars({ '--d': 0.2 })}>
            <a
              ref={cta}
              href="#contact-form"
              className="btn btn-light"
              onClick={() => window.setTimeout(() => document.getElementById('name')?.focus({ preventScroll: true }), 450)}
            >
              Start a Project <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <form id="contact-form" className="form reveal" onSubmit={submit} noValidate style={vars({ '--d': 0.15 })}>
          <label>Name<input id="name" name="name" autoComplete="name" placeholder="Your name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label>Project<textarea name="msg" placeholder="Tell us what you’d like to build" required /></label>
          <button className="btn btn-light" type="submit">Send message <ArrowRight size={18} /></button>
          <p className={`status${status && !status.ok ? ' err' : ''}`} role="status" aria-live="polite">{status?.msg}</p>
        </form>
      </div>
    </section>
  )
        }
