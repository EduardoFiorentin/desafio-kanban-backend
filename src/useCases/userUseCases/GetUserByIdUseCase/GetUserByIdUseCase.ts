import { IUsersRepository } from "../../../repositories/IUsersRepository";

class GetUserByIdUseCase {
    constructor(
        private userRepository: IUsersRepository
    ){}
    
    async execute(id: string) {
        try {
            const users = await this.userRepository.getUsersById(id) 
            return users
            
        } catch(err) {
            throw new Error(`Erro no usecase: ${err}`)
        }
    }
}

export { GetUserByIdUseCase }