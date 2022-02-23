import {
  createUserWithEmailAndPassword,
  inMemoryPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { User } from '../entity/user'
import UserRepository from '../interface/repository/userRepository'
import { AuthStatus } from '../interface/repository/userRepository'
import { auth } from 'src/common/plugins/firebase'

export default class UserRepositoryImp implements UserRepository {
  listenAuthStatus(): AuthStatus {
    const currentUser = auth.currentUser

    if (currentUser) {
      return AuthStatus.AUTHENTICATED
    }

    return AuthStatus.NONE
  }

  async createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthStatus> {
    try {
      setPersistence(auth, inMemoryPersistence)
      await createUserWithEmailAndPassword(auth, email, password)

      return AuthStatus.AUTHENTICATED
    } catch (error: any) {
      return error.message
    }
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthStatus> {
    if (auth.currentUser !== null) {
      return AuthStatus.ERROR
    }

    try {
      setPersistence(auth, inMemoryPersistence)

      await signInWithEmailAndPassword(auth, email, password)
      return AuthStatus.AUTHENTICATED
    } catch (e: any) {
      return e.message
    }
  }

  async signOut(): Promise<boolean> {
    if (auth.currentUser == null) {
      return true
    }

    try {
      await auth.signOut()
      return true
    } catch (e: any) {
      return e.message
    }
  }
}
