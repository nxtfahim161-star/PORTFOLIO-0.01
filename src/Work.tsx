import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Maximize2, X } from 'lucide-react'
import { Logo, Mark } from './Brand'
import { vars } from './hooks'

function Ring({ p }: { p: number }) {
  const r = 40
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id="ringg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5B21D6" /><stop offset="1" stopColor="#E0278A" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r={r} fill="none" stroke="#E9DDF5" strokeWidth="9" />
      <circle cx="50" cy="50" r={r} fill="none" stroke="url(#ringg)" strokeWidth="9" strokeLinecap="round" strokeDasharray={`${c * p} ${c}`} transform="rotate(-90 50 50)" />
      <text x="50" y="58" textAnchor="middle" fontSize="24" fontWeight="800" fill="#220571">{Math.round(p * 100)}</text>
    </svg>
  )
}

type Item = { id: string; title: string; ar: number; node: ReactNode }

const items: Item[] = [
  {
    id: 'app', title: 'Mobile app', ar: 0.8,
    node: (
      <div className="mock m-phone">
        <div className="phone">
          <div className="p-top"><Mark size={20} /> Today</div>
          <p className="p-hi">Good evening, Ari</p>
          <div className="p-ring"><Ring p={0.78} /></div>
          <div className="p-card"><b>Hip release</b><span>12 min</span><i style={vars({ '--w': '72%' })} /></div>
          <div className="p-card"><b>Breath reset</b><span>6 min</span><i style={vars({ '--w': '40%' })} /></div>
        </div>
      </div>
    ),
  },
  {
    id: 'web', title: 'Website interface', ar: 1.25,
    node: (
      <div className="mock m-web">
        <div className="win">
          <div className="bar"><i /><i /><i /><span>motionform.example</span></div>
          <div className="web">
            <div className="web-nav"><Logo tone="color" /><span>Work</span><span>About</span></div>
            <h4>Move Better.<br />Feel More.</h4>
            <p>Recovery programmes designed around how you live.</p>
            <span className="web-btn">Start today</span>
            <div className="web-art"><Mark size={100} /></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'social', title: 'Social graphic', ar: 1,
    node: (
      <div className="mock m-social">
        <Mark mono size={48} />
        <h4>Move Better.<br />Feel More.</h4>
        <span>@MOTIONFORM</span>
      </div>
    ),
  },
  {
    id: 'poster', title: 'Campaign poster', ar: 0.7,
    node: (
      <div className="mock m-poster">
        <div className="po-mark"><Mark size={300} /></div>
        <h4>MOVE</h4>
        <p>Recovery · Balance · Progress</p>
      </div>
    ),
  },
  {
    id: 'stationery', title: 'Brand stationery', ar: 1.1,
    node: (
      <div className="mock m-stat">
        <div className="letter"><Mark size={30} /><i style={{ width: '80%' }} /><i style={{ width: '95%' }} /><i style={{ width: '60%' }} /><i style={{ width: '88%' }} /></div>
        <div className="c1"><Logo tone="onDark" /></div>
        <div className="c2"><Mark size={30} /><b>Ari Rahman</b><span>Movement Director</span></div>
      </div>
    ),
  },
  {
    id: 'pack', title: 'Packaging', ar: 0.9,
    node: (
      <div className="mock m-pack">
        <div className="box"><Mark mono size={40} /><div><b>RECOVER</b><span>Magnesium balm · 50 ml</span></div></div>
        <div className="tube" />
      </div>
    ),
  },
  {
    id: 'banner', title: 'Digital banner', ar: 2.4,
    node: (
      <div className="mock m-banner">
        <Mark size={48} />
        <h4>Recover smarter.</h4>
        <span className="web-btn">Start today</span>
      </div>
    ),
  },
]

function Lightbox({ item, onClose }: { item: Item | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (item && !d.open) d.showModal()
    if (!item && d.open) d.close()
    document.body.style.overflow = item ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [item])

  return (
    <dialog ref={ref} className="lb" aria-label={item ? `${item.title} preview` : 'Preview'} onClose={onClose}>
      {item && (
        <div className="lb-inner" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
          <button className="lb-x" onClick={onClose} aria-label="Close preview"><X /></button>
          <div className="lb-card" style={vars({ '--ar': item.ar })}>{item.node}</div>
          <p className="lb-cap">{item.title}</p>
        </div>
      )}
    </dialog>
  )
}

export default function Work() {
  const [active, setActive] = useState<Item | null>(null)
  return (
    <section id="work" className="sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow reveal">Brand in action</p>
          <h2 className="h2 reveal" style={vars({ '--d': 0.1 })}>From screen to shelf.</h2>
          <p className="lead reveal" style={vars({ '--d': 0.2 })}>
            The same symbol, palette and rhythm travel across digital and physical touchpoints. Select any piece to view it larger.
          </p>
        </div>

        <div className="gal">
          {items.map((it, i) => (
            <div className="app reveal" key={it.id} style={vars({ '--ar': it.ar, '--d': (i % 3) * 0.08 })}>
              {it.node}
              <span className="app-cap">{it.title} <Maximize2 size={13} aria-hidden="true" /></span>
              <button className="app-open" onClick={() => setActive(it)} aria-label={`Open ${it.title} preview`} />
            </div>
          ))}
        </div>
      </div>
      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  )
      }
