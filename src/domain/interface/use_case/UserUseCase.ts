import { User } from 'src/domain/entity/user'
import { AuthStatus } from 'src/domain/interface/repository/userRepository'

export default interface UserUseCase {
  listenAuthStatus(): AuthStatus
  createUserWithEmailAndPassword(user: User): Promise<AuthStatus>
  signInWithEmailAndPassword(user: User): Promise<AuthStatus>
  signOut(): Promise<boolean>
}
