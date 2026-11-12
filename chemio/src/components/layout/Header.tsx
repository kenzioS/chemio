import { UserMenu } from './UserMenu'
import type { View } from '../../types/navigation'

interface HeaderProps {
  view: View
  onNavigateHome: () => void
  onOpenLogin: () => void
  onSignOut: () => void
}

export function Header({ view, onNavigateHome, onOpenLogin, onSignOut }: HeaderProps) {
  const isTeacherView = view === 'teacher'

  return (
    <header className="header">
      <div
        className="logo logo-clickable"
        role="button"
        tabIndex={0}
        onClick={onNavigateHome}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onNavigateHome()
          }
        }}
      >
        chem.io
      </div>
      {!isTeacherView && (
        <button
          type="button"
          className="btn btn-outline header-btn"
          onClick={onOpenLogin}
        >
          Log in
        </button>
      )}
      {isTeacherView && <UserMenu onSignOut={onSignOut} />}
    </header>
  )
}

