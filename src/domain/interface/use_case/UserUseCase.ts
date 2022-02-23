import { AuthStatus } from 'src/domain/interface/repository/userRepository'

export default interface UserUseCase {
  listenAuthStatus(): AuthStatus
  createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthStatus>
  signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthStatus>
  signOut(): Promise<boolean>
}
