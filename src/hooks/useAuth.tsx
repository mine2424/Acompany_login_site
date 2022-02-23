import { useRecoilCallback, useRecoilState } from 'recoil'
import UserUseCase from '../domain/interface/use_case/UserUseCase'
import { AuthState, authState } from './state/authState'

export function useAuth(useCase: UserUseCase) {
  const [auths, setAuth] = useRecoilState(authState)

  const listenAuthStatus = () => {
    const status = useCase.listenAuthStatus()

    const data: AuthState = { status: status }
    setAuth(data)
  }

  return { state: auths, set: setAuth, listenAuthStatus }
}
