import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { generateUpdateSqlUser } from "../../../utils/generateUpdateUser";
import { IUpdateUserRequestDTO } from "./UpdateUserRequestDTO";

class UpdateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ){}
    
    async execute(props: IUpdateUserRequestDTO) {
        try {
            
            const {id, login, name, password} = props
            if (!id) throw new Error("Sem id")

            const updateUser = await this.userRepository.updateUser({id, login, name, password})
            return updateUser
        } catch(err) {
            throw new Error(`Erro no usecase: ${err}`)
        }
    }
}

export { UpdateUserUseCase }