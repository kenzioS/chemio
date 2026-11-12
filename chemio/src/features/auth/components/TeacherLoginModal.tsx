import { useState } from 'react'
import type { TeacherCredentials } from '../types'

interface TeacherLoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: (credentials: TeacherCredentials) => void
}

export function TeacherLoginModal({ isOpen, onClose, onLogin }: TeacherLoginModalProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!isOpen) return null

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === ''
    ) {
      return
    }

    onLogin({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password,
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="login-title" className="modal-title">
          Log in
        </h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label className="field">
              <span className="field-label">First Name</span>
              <input
                className="input"
                type="text"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="e.g. Marie"
                required
              />
            </label>
            <label className="field">
              <span className="field-label">Last Name</span>
              <input
                className="input"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="e.g. Curie"
                required
              />
            </label>
          </div>
          <label className="field">
            <span className="field-label">Email</span>
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="e.g. marie.curie@chem.io"
              required
            />
          </label>
          <label className="field">
            <span className="field-label">Password</span>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="e.g. Password123!"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
        </form>
        <button type="button" className="link-button">
          Register account
        </button>
      </div>
    </div>
  )
}

