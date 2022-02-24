import {
  createUserWithEmailAndPassword,
  inMemoryPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { User } from '../entity/user'
import UserRepository from '../interface/repository/userRepository'
import { AuthStatus } from '../interface/repository/userRepository'
import { auth } from 'src/common/plugins/firebase'

export default class UserRepositoryImp implements UserRepository {
  listenAuthStatus(): AuthStatus {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return AuthStatus.AUTHENTICATED
      } else {
        return AuthStatus.NONE
      }
    })

    return AuthStatus.NONE
  }

  async createUserWithEmailAndPassword(user: User): Promise<AuthStatus> {
    try {
      await setPersistence(auth, inMemoryPersistence)
      await createUserWithEmailAndPassword(auth, user.email, user.password)

      return AuthStatus.AUTHENTICATED
    } catch (error: any) {
      return error.message
    }
  }

  async signInWithEmailAndPassword(user: User): Promise<AuthStatus> {
    if (auth.currentUser !== null) {
      return AuthStatus.ERROR
    }

    try {
      await setPersistence(auth, inMemoryPersistence)
      // BUG: ログインするためのメソッドとしては合っているが、(emnail-already-in-use)とエラーが返ってくる
      // このエラーを返されるとどうすることもできないので、一旦保留にしている。
      // 別の方法として、ユーザーが存在しているかどうかを確認して、そのままログインとして扱うパターンもあるが...
      await signInWithEmailAndPassword(auth, user.email, user.password)

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
