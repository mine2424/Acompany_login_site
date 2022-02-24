/* eslint-disable react-hooks/exhaustive-deps */
import OnBoarding from './onBoarding'
import { useAuth } from '../hooks/useAuth'
import { userUseCase } from 'src/domain/useCase'
import { useEffect } from 'react'
import { AuthStatus } from 'src/domain/interface/repository/userRepository'
import MyPage from './myPage'

export default function Home() {
  const { state, listenAuthStatus } = useAuth(userUseCase)

  useEffect(() => {
    listenAuthStatus()
  }, [])

  return state.status === AuthStatus.LOADING ? (
    <p>Loading...</p>
  ) : state.status === AuthStatus.AUTHENTICATED ? (
    <MyPage />
  ) : (
    <OnBoarding />
  )
}
