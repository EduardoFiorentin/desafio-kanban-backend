import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { validateUserUseCase } from "../ValidateTokenUseCase";

class AuthUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ){}

    async execute(login: string, password: string) {
        try {

            if (login && password) {
                const authUser = await this.userRepository.auth(login, password)
                console.log("useCase", authUser)
                return authUser
            } else return null

        } catch (err) {
            throw new Error("Erro no use case - auth user")
        }
    }
}

export { AuthUserUseCase }