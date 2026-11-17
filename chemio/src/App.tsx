import { useState } from 'react'
import './App.css'
import { Header } from './components/layout/Header'
import { HomePathSelector } from './features/home/components/HomePathSelector'
import { StudentExperimentsView } from './features/experiments/components/StudentExperimentsView'
import { TeacherDashboard } from './features/teacher/components/TeacherDashboard'
import { LoginModal } from './features/auth/components/LoginModal'
import type { View } from './types/navigation'
import type { LoginCredentials, TeacherUser } from './features/auth/types'

type LoginRole = 'teacher' | 'student'

function App() {
  const [view, setView] = useState<View>('home')
  const [loginRole, setLoginRole] = useState<LoginRole | null>(null)
  const [, setTeacherUser] = useState<TeacherUser | null>(null)

  const handleLogin = (credentials: LoginCredentials) => {
    if (loginRole === null) return

    setTeacherUser({
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      school: credentials.school,
      email: credentials.email,
    })
    setLoginRole(null)
    setView(loginRole === 'student' ? 'student' : 'teacher')
  }

  const handleSignOut = () => {
    setTeacherUser(null)
    setView('home')
  }

  return (
    <div className={`page ${view === 'teacher' ? 'page-teacher' : ''} ${view === 'student' ? 'page-student' : ''}`}>
      <Header
        view={view}
        onNavigateHome={() => setView('home')}
        onOpenLogin={() => setLoginRole('teacher')}
        onSignOut={handleSignOut}
      />

      {view === 'home' && (
        <HomePathSelector
          onChooseStudent={() => setLoginRole('student')}
          onChooseTeacher={() => setLoginRole('teacher')}
        />
      )}

      {view === 'student' && (
        <StudentExperimentsView onBackToHome={() => setView('home')} />
      )}

      {view === 'teacher' && <TeacherDashboard />}

      <LoginModal
        key={loginRole ?? 'none'}
        isOpen={loginRole !== null}
        title={loginRole === 'student' ? 'Student log in' : 'Teacher log in'}
        onClose={() => setLoginRole(null)}
        onLogin={handleLogin}
      />
    </div>
  )
}

export default App
