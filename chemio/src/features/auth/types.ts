export interface LoginCredentials {
  firstName: string
  lastName: string
  school: string
  email: string
  password: string
}

export type TeacherCredentials = LoginCredentials

export interface TeacherUser {
  firstName: string
  lastName: string
  school: string
  email: string
}
