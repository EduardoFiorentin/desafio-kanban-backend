import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
// import { ICreateUserRequestDTO as User } from "./CreateUserRequestDTO";

class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ){}
    
    async execute(props: User): Promise<ISystemResponsePattern> {

        // verificar se login ja existe 

        try {
            const {login, name, password} = props

            if (login && name && password) {
                const newUser = new User({login, name, password})
                const createNewUser = await this.userRepository.createUser(newUser)
                return createNewUser
            } else {
                return {
                    sucess: false,
                    exception: "Informações faltando!"
                }
            } 
        } catch(err) {
            throw new Error(`Erro no usecase: ${err}`)
        }
    }   
}

export { CreateUserUseCase }