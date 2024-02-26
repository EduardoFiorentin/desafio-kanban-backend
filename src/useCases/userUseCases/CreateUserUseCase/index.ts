import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { userDatabase } from "../../../repositories";

const createUserUseCase = new CreateUserUseCase(userDatabase) 
const createUserController = new CreateUserController(createUserUseCase)

export {createUserController}