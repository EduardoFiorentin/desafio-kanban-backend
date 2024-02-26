import { User } from "../entities/User";
import { IUpdateUserRequestDTO } from "../useCases/userUseCases/UpdateUserUseCase/UpdateUserRequestDTO";

export interface IUsersRepository {
    getUsers(): Promise<User[]>,
    getUsersById(id: string): Promise<User[]>,
    createUser(user: User): Promise<boolean>,
    updateUser(modObj: IUpdateUserRequestDTO): Promise<boolean>,
    deleteUser(id: string): Promise<boolean>
}