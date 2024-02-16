import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { database } from "../../../repositories";

const createUserUseCase = new CreateUserUseCase(database) 
const createUserController = new CreateUserController(createUserUseCase)

export {createUserController}