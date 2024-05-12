import { User } from "../entities/User";
import { IAuthUserDTO } from "../useCases/userUseCases/AuthUserUserCase/AuthUserDTO";
import { IUpdateUserRequestDTO } from "../useCases/userUseCases/UpdateUserUseCase/UpdateUserRequestDTO";

export interface IUsersRepository {
    getUsers(): Promise<ISystemResponsePattern>,
    getUsersById(id: string): Promise<ISystemResponsePattern>,
    createUser(user: User): Promise<ISystemResponsePattern>,
    updateUser(modObj: IUpdateUserRequestDTO): Promise<boolean>,
    deleteUser(id: string): Promise<boolean>,
    auth(login: string, password: string): Promise<IAuthUserDTO | null>
}