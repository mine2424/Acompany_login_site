import { User } from 'src/domain/entity/user'
import UserRepository, {
  AuthStatus,
} from 'src/domain/interface/repository/userRepository'
import UserRepositoryImp from '../userRepository'

describe('UserRepository', () => {
  it('should create an instance', () => {
    expect(new UserRepositoryImp()).toBeTruthy()
  })

  test('create user', async () => {
    const user: User = {
      email: 'test@gmail.com',
      password: 'test123456',
    }
    const test = new UserRepositoryImp()

    expect(await test.createUserWithEmailAndPassword(user)).toEqual(
      AuthStatus.AUTHENTICATED
    )
  })

  test('login user', async () => {
    const user: User = {
      email: 'test@gmail.com',
      password: 'test123456',
    }
    const test = new UserRepositoryImp()

    expect(await test.signInWithEmailAndPassword(user)).toEqual(
      AuthStatus.AUTHENTICATED
    )
  })

  test('logout user', async () => {
    const test = new UserRepositoryImp()

    expect(await test.signOut()).toEqual(true)
  })
})
