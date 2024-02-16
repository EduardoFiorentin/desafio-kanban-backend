import { IUsersRepository } from "../../../repositories/IUsersRepository";

class DeleteUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ){}

    async execute(id: string) {
        try {
            
            if (id === undefined) throw new Error("Id necessário")

            return (await this.userRepository.deleteUser(id))

        } catch (err) {
            console.log(err)
        }
    }
}

export { DeleteUserUseCase }