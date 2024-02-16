import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

class GetUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ){}
    
    async execute() {
        try {
            const users = await this.userRepository.getUsers() 
            return users
            
        } catch(err) {
            throw new Error(`Erro no usecase: ${err}`)
        }
    }
}

export { GetUserUseCase }