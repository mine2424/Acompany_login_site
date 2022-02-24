import UserRepositoryImpl from '../repository/userRepository'
import UserUseCaseImpl from './userUseCase'

const userRepository = new UserRepositoryImpl()

export const userUseCase = new UserUseCaseImpl(userRepository)
