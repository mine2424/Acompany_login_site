import UserRepository from '../interface/repository/userRepository'
import UserUseCase from '../interface/useCase/userUseCase'
import { User } from '../entity/user'
import { AuthStatus } from '../interface/repository/userRepository'

export default class UserUseCaseImpl implements UserUseCase {
  readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  listenAuthStatus(): AuthStatus {
    return this.userRepository.listenAuthStatus()
  }

  async createUserWithEmailAndPassword(user: User): Promise<AuthStatus> {
    const result = await this.userRepository.createUserWithEmailAndPassword(
      user
    )

    if (result === AuthStatus.ERROR) {
      alert(result)
    }

    return result
  }

  async signOut(): Promise<boolean> {
    return this.userRepository.signOut()
  }

  async signInWithEmailAndPassword(user: User): Promise<AuthStatus> {
    const result = await this.userRepository.createUserWithEmailAndPassword(
      user
    )

    if (result === AuthStatus.ERROR) {
      alert(result)
    }

    return result
  }
}
