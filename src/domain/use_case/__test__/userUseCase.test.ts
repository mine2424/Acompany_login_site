import { User } from 'src/domain/entity/user'
import { AuthStatus } from 'src/domain/interface/repository/userRepository'
import UserRepositoryImp from 'src/domain/repository/userRepository'
import UserUseCase from '../userUseCase'

describe('UserRepository', () => {
  const userRepository = new UserRepositoryImp()
  
  it('should create an instance', () => {
    expect(new UserUseCase(userRepository)).toBeTruthy()
  })

  test('create user', async () => {
    const user: User = {
      email: 'test@gmail.com',
      password: 'test123456',
    }
    const test = new UserUseCase(userRepository)

    expect(await test.createUserWithEmailAndPassword(user)).toEqual(
      AuthStatus.AUTHENTICATED
    )
  })

  test('login user', async () => {
    const user: User = {
      email: 'test@gmail.com',
      password: 'test123456',
    }
    const test = new UserUseCase(userRepository)

    expect(await test.signInWithEmailAndPassword(user)).toEqual(
      AuthStatus.AUTHENTICATED
    )
  })

  test('logout user', async () => {
    const test = new UserUseCase(userRepository)

    expect(await test.signOut()).toEqual(true)
  })
})
