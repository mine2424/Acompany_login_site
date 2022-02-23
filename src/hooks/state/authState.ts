import { atom } from 'recoil'
import { AuthStatus } from 'src/domain/interface/repository/userRepository'
import { RecoilAtomKeys, RecoilSelectorKeys } from '../RecoilKeys'

export type AuthState = {
  status: AuthStatus
}

export const authState = atom<AuthState>({
  key: RecoilAtomKeys.AUTH_STATE,
  default: {
    status: AuthStatus.NONE,
  },
})
