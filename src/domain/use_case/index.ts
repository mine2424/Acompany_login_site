import UserRepositoryImpl from '../repository/userRepository'
import UserUseCaseImpl from './UserUseCase'

const userRepository = new UserRepositoryImpl()

export const userUseCase = new UserUseCaseImpl(userRepository)
