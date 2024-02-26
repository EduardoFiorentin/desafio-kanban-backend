import { userDatabase } from "../../../repositories";
import { GetUserByIdController } from "./GetUserByIdController";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

const getUserByIdUseCase = new GetUserByIdUseCase(userDatabase)
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

export { getUserByIdController }