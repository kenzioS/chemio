import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

const MOBILE_BREAKPOINT = '(max-width: 640px)'

export interface SideMenuItem<T extends string> {
  id: T
  label: string
  icon: ReactNode
}

interface SideMenuProps<T extends string> {
  ariaLabel: string
  items: SideMenuItem<T>[]
  activeId: T
  onSelect: (id: T) => void
}

export function SideMenu<T extends string>({
  ariaLabel,
  items,
  activeId,
  onSelect,
}: SideMenuProps<T>) {
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    if (typeof window === 'undefined') return true
    return !window.matchMedia(MOBILE_BREAKPOINT).matches
  })

  useEffect(() => {
    const query = window.matchMedia(MOBILE_BREAKPOINT)
    const handleChange = (event: MediaQueryListEvent) => {
      setIsMenuOpen(!event.matches)
    }

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])
  const navId = `${ariaLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-nav`

  return (
    <aside className={`side-menu ${isMenuOpen ? '' : 'side-menu-collapsed'}`} aria-label={ariaLabel}>
      <nav className="side-menu-nav" id={navId}>
        <ul className="side-menu-list">
          {items.map((item) => {
            const isActive = item.id === activeId
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`side-menu-item ${isActive ? 'side-menu-item-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  title={item.label}
                  onClick={() => onSelect(item.id)}
                >
                  <span className="side-menu-icon">{item.icon}</span>
                  <span className="side-menu-label">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <button
        type="button"
        className="side-menu-toggle"
        aria-expanded={isMenuOpen}
        aria-controls={navId}
        aria-label={isMenuOpen ? 'Hide menu' : 'Show menu'}
        title={isMenuOpen ? 'Hide menu' : 'Show menu'}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className={`side-menu-toggle-arrow ${isMenuOpen ? '' : 'is-collapsed'}`} aria-hidden="true">
          {'<'}
        </span>
        <span className="side-menu-toggle-label">
          {isMenuOpen ? 'Hide menu' : 'Show menu'}
        </span>
      </button>
    </aside>
  )
}
