import { userDatabase } from "../../../repositories";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const getUserUseCase = new GetUserUseCase(userDatabase)
const getUserController = new GetUserController(getUserUseCase)

export { getUserController }