import { useState } from 'react'
import './App.css'
import { Header } from './components/layout/Header'
import { HomePathSelector } from './features/home/components/HomePathSelector'
import { ExperimentsGrid } from './features/experiments/components/ExperimentsGrid'
import { TeacherDashboard } from './features/teacher/components/TeacherDashboard'
import { TeacherLoginModal } from './features/auth/components/TeacherLoginModal'
import type { View } from './types/navigation'
import type { TeacherCredentials, TeacherUser } from './features/auth/types'

function App() {
  const [view, setView] = useState<View>('home')
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false)
  const [, setTeacherUser] = useState<TeacherUser | null>(null)

  const handleTeacherLogin = (credentials: TeacherCredentials) => {
    setTeacherUser({
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
    })
    setIsTeacherModalOpen(false)
    setView('teacher')
  }

  const handleSignOut = () => {
    setTeacherUser(null)
    setView('home')
  }

  return (
    <div className="page">
      <Header
        view={view}
        onNavigateHome={() => setView('home')}
        onOpenLogin={() => setIsTeacherModalOpen(true)}
        onSignOut={handleSignOut}
      />

      {view === 'home' && (
        <HomePathSelector
          onChooseStudent={() => setView('student')}
          onChooseTeacher={() => setIsTeacherModalOpen(true)}
        />
      )}

      {view === 'student' && (
        <ExperimentsGrid onBack={() => setView('home')} />
      )}

      {view === 'teacher' && <TeacherDashboard />}

      <TeacherLoginModal
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
        onLogin={handleTeacherLogin}
      />
    </div>
  )
}

export default App
