import { useId } from 'react'

export type Tone = 'color' | 'onDark' | 'white' | 'black'

const clean = (s: string) => s.replace(/:/g, '')

export function Mark({
  mono = false,
  size = 40,
  label,
}: {
  mono?: boolean
  size?: number | string
  label?: string
}) {
  const id = clean(useId())
  const a = mono ? 'currentColor' : `url(#${id}a)`
  const b = mono ? 'currentColor' : `url(#${id}b)`
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {!mono && (
        <defs>
          <linearGradient id={`${id}a`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5B21D6" />
            <stop offset="1" stopColor="#E0278A" />
          </linearGradient>
          <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E0278A" />
            <stop offset="1" stopColor="#FC837A" />
          </linearGradient>
        </defs>
      )}
      <path d="M50 6A44 44 0 0 1 94 50L50 50Z" fill={a} />
      <path d="M50 94A44 44 0 0 1 6 50L50 50Z" fill={b} />
      <circle cx="27" cy="27" r="13" fill={a} />
      <circle cx="73" cy="73" r="13" fill={b} />
    </svg>
  )
}

export function Logo({
  tone = 'color',
  stack = false,
  tagline = false,
}: {
  tone?: Tone
  stack?: boolean
  tagline?: boolean
}) {
  return (
    <span className={`logo tone-${tone}${stack ? ' stack' : ''}`}>
      <Mark mono={tone === 'white' || tone === 'black'} />
      <span className="logo-text">
        <b>MOTIONFORM</b>
        {tagline && <small>Move Better. Feel More.</small>}
      </span>
    </span>
  )
}

export function QuarterPattern({
  a = '#5B21D6',
  b = '#E0278A',
  bg = 'transparent',
  cell = 40,
}: {
  a?: string
  b?: string
  bg?: string
  cell?: number
}) {
  const id = clean(useId())
  const h = cell / 2
  return (
    <svg className="pattern" width="100%" height="100%" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={id} width={cell} height={cell} patternUnits="userSpaceOnUse">
          <path d={`M0 0H${h}A${h} ${h} 0 0 1 0 ${h}Z`} fill={a} />
          <path d={`M${cell} ${cell}H${h}A${h} ${h} 0 0 1 ${cell} ${h}Z`} fill={b} />
          <circle cx={cell * 0.75} cy={cell * 0.25} r={cell * 0.1} fill={a} />
          <circle cx={cell * 0.25} cy={cell * 0.75} r={cell * 0.1} fill={b} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={bg} />
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/** Original abstract figure in motion, built from strokes and motion trails. */
export function Figure() {
  const limbs = (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22">
      <path d="M200 205L214 300" strokeWidth="46" />
      <path d="M214 300L165 392L112 408" />
      <path d="M214 300L272 372L300 468" />
      <path d="M202 222L142 262L108 226" />
      <path d="M210 222L272 244L316 204" />
    </g>
  )
  return (
    <svg viewBox="0 0 400 500" role="img" aria-label="Abstract figure in motion with trailing echoes" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5B21D6" />
          <stop offset=".6" stopColor="#E0278A" />
          <stop offset="1" stopColor="#FC837A" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#fg)" />
      <circle cx="320" cy="90" r="120" fill="#fff" opacity=".12" />
      <g stroke="#fff" opacity=".16" transform="translate(-64 6)">{limbs}<circle cx="190" cy="150" r="34" fill="#fff" stroke="none" /></g>
      <g stroke="#fff" opacity=".32" transform="translate(-32 3)">{limbs}<circle cx="195" cy="150" r="34" fill="#fff" stroke="none" /></g>
      <g stroke="#fff">{limbs}<circle cx="200" cy="150" r="34" fill="#fff" stroke="none" /></g>
    </svg>
  )
}
