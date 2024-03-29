import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { User } from 'src/domain/entity/user'
import { AuthStatus } from 'src/domain/interface/repository/userRepository'
import UserUseCase from '../domain/interface/useCase/userUseCase'
import { UserState, userState } from './state/userState'

export function useUser(useCase: UserUseCase) {
  const [user, setUser] = useRecoilState(userState)
  const router = useRouter()

  const signUp = async (email: string, password: string) => {
    const data: UserState = { email: email, password: password }
    setUser(data)

    const result = await useCase.createUserWithEmailAndPassword(
      new User(email, password)
    )

    if (result !== AuthStatus.AUTHENTICATED) {
      alert('登録に失敗しました。\n' + result.toString())
      router.back()
      return
    }

    await router.push('/myPage')
  }

  const login = async (email: string, password: string) => {
    const result = await useCase.signInWithEmailAndPassword(
      new User(email, password)
    )

    if (result !== AuthStatus.AUTHENTICATED) {
      alert('ログインに失敗しました。\n' + result.toString())
      router.back()
      return
    }

    await router.push('/myPage')
  }

  const logout = async () => {
    const result = await useCase.signOut()
    if (result) {
      alert('ログアウトしました。')
      await router.push('/')
    }
  }

  return { state: user, set: setUser, signUp, login, logout }
}
