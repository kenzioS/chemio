import { useEffect, useRef, useState } from 'react'

interface UserMenuProps {
  onSignOut: () => void
}

export function UserMenu({ onSignOut }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handlePointerDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [isOpen])

  return (
    <div className="user-menu" ref={menuRef}>
      <button
        type="button"
        className="user-menu-button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Open account menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="user-avatar" aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="3.6" />
            <path d="M4.5 20.5c0-3.9 3.2-6.3 7.5-6.3s7.5 2.4 7.5 6.3" />
          </svg>
        </span>
        <span
          className={`user-menu-arrow ${isOpen ? 'user-menu-arrow-up' : ''}`}
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul className="user-menu-dropdown" role="menu">
          <li>
            <button
              type="button"
              className="user-menu-option"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              type="button"
              className="user-menu-option"
              role="menuitem"
              onClick={() => {
                setIsOpen(false)
                onSignOut()
              }}
            >
              Sign Out
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}
