import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserRequestDTO";

class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ){}
    
    async execute(props: ICreateUserRequestDTO) {
        try {
            const {login, name, password} = props

            if (login && name && password) {
                const newUser = new User({login, name, password})
                const createNewUser = await this.userRepository.createUser(newUser)
                return createNewUser
            } else {
                return false
            } 
        } catch(err) {
            throw new Error(`Erro no usecase: ${err}`)
        }
    }   
}

export { CreateUserUseCase }