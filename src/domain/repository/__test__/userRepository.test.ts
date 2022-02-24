import { User } from "src/domain/entity/user"
import UserRepository, { AuthStatus } from "src/domain/interface/repository/userRepository"

class UserRepositoryTest implements UserRepository {
  listenAuthStatus(): AuthStatus {
    throw new Error("Method not implemented.")
  }
  createUserWithEmailAndPassword(user: User): Promise<AuthStatus> {
    throw new Error("Method not implemented.")
  }
  signOut(): Promise<boolean> {
    throw new Error("Method not implemented.")
  }
  signInWithEmailAndPassword(user: User): Promise<AuthStatus> {
    throw new Error("Method not implemented.")
  }
}

describe("UserRepository", () => {
  it("should create an instance", () => {
    expect(new UserRepositoryTest()).toBeTruthy()
  })

  test("create user", async () => {
    const user: User = {
      email: "test@gmail.com",
      password: "test123456",
    };
    const test = new UserRepositoryTest();

    expect(await test.createUserWithEmailAndPassword(user)).toEqual(AuthStatus.AUTHENTICATED);
  });

  test("login user", async () => {
    const user: User = {
      email: "test@gmail.com",
      password: "test123456",
    };
    const test = new UserRepositoryTest();

    expect(await test.signInWithEmailAndPassword(user)).toEqual(AuthStatus.AUTHENTICATED);
  });

  test("logout user", async () => {
    const test = new UserRepositoryTest();

    expect(await test.signOut()).toEqual(true);
  });
})