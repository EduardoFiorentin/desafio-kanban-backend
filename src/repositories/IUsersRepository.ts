import { User } from "../entities/User";
import { IUserJson } from "../entities/types/userJson";

export interface IUsersRepository {
    getUsers(): Promise<User[]>,
    getUsersById(id: string): Promise<User[]>,
    createUser(user: User): Promise<boolean>,
    updateUser(modObj: IModObj): Promise<boolean>,
    deleteUser(id: string): Promise<boolean>
}