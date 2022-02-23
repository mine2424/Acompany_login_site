import { UserCredential } from 'firebase/auth'
import { User } from 'src/domain/entity/user'

export default interface UserRepository {
  listenAuthStatus(): AuthStatus
  createUserWithEmailAndPassword(user: User): Promise<AuthStatus>
  signOut(): Promise<boolean>
  signInWithEmailAndPassword(user: User): Promise<AuthStatus>
}

export const enum AuthStatus {
  NONE,
  ERROR,
  LOADING,
  AUTHENTICATED,
}
