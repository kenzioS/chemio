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
    <div className="menu" ref={menuRef}>
      <button
        type="button"
        className="menu-button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span
          className={`menu-arrow ${isOpen ? 'menu-arrow-up' : ''}`}
          aria-hidden="true"
        >
          {'>'}
        </span>
        <span className="menu-lines" aria-hidden="true">
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </span>
      </button>
      {isOpen && (
        <ul className="menu-dropdown" role="menu">
          <li>
            <button
              type="button"
              className="menu-option"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Setting
            </button>
          </li>
          <li>
            <button
              type="button"
              className="menu-option"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Results
            </button>
          </li>
          <li>
            <button
              type="button"
              className="menu-option"
              role="menuitem"
              onClick={() => {
                setIsOpen(false)
                onSignOut()
              }}
            >
              Sign out
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

