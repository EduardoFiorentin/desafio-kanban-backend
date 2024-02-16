import { database } from "../../../repositories";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const getUserUseCase = new GetUserUseCase(database)
const getUserController = new GetUserController(getUserUseCase)

export { getUserController }