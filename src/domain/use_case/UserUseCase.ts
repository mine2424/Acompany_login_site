import { AuthStatus } from '../interface/repository/userRepository'
import UserRepository from '../interface/repository/userRepository'
import UserUseCase from '../interface/use_case/UserUseCase'

export default class UserUseCaseImpl implements UserUseCase {
  readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  listenAuthStatus(): AuthStatus {
    return this.userRepository.listenAuthStatus()
  }

  async createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthStatus> {
    const result = await this.userRepository.createUserWithEmailAndPassword(
      email,
      password
    )

    if (result === AuthStatus.ERROR) {
      alert(result)
    }

    return result
  }

  async signOut(): Promise<boolean> {
    return this.userRepository.signOut()
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthStatus> {
    const result = await this.userRepository.createUserWithEmailAndPassword(
      email,
      password
    )

    if (result === AuthStatus.ERROR) {
      alert(result)
    }

    return result
  }
}
