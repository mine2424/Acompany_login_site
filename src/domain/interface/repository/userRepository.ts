import { UserCredential } from 'firebase/auth'

export default interface UserRepository {
  listenAuthStatus(): AuthStatus
  createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthStatus>
  signOut(): Promise<boolean>
  signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthStatus>
}

export const enum AuthStatus {
  NONE,
  ERROR,
  LOADING,
  AUTHENTICATED,
}
