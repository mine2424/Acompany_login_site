import { atom } from 'recoil'
import { RecoilAtomKeys } from '../RecoilKeys'

export type UserState = {
  email: string
  password: string
}

export const userState = atom<UserState>({
  key: RecoilAtomKeys.USER_STATE,
  default: {
    email: '',
    password: '',
  },
})
