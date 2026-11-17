const common = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ExperimentsIcon() {
  return (
    <svg {...common}>
      <path d="M9 3h6" />
      <path d="M10 3v6l-5.5 9.2A1.6 1.6 0 0 0 5.9 21h12.2a1.6 1.6 0 0 0 1.4-2.8L14 9V3" />
      <path d="M7.5 15h9" />
    </svg>
  )
}

export function QuizzesIcon() {
  return (
    <svg {...common}>
      <rect x="4" y="4" width="16" height="17" rx="2" />
      <path d="M9 3v3M15 3v3" />
      <path d="m8.5 13 2 2 4-4" />
    </svg>
  )
}

export function StudentsIcon() {
  return (
    <svg {...common}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c0-3.2 2.5-5.2 5.5-5.2s5.5 2 5.5 5.2" />
      <path d="M16 5.4a3 3 0 0 1 0 5.2" />
      <path d="M17.5 15.2c1.8.6 3 2.2 3 4.3" />
    </svg>
  )
}

export function ResultsIcon() {
  return (
    <svg {...common}>
      <path d="M4 20h16" />
      <rect x="5.5" y="12" width="3.5" height="6" rx="1" />
      <rect x="10.25" y="8" width="3.5" height="10" rx="1" />
      <rect x="15" y="4" width="3.5" height="14" rx="1" />
    </svg>
  )
}

export function GuideIcon() {
  return (
    <svg {...common}>
      <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5z" />
      <path d="M5 19.5A2.5 2.5 0 0 1 7.5 17H19" />
      <path d="M9 7h6" />
    </svg>
  )
}
