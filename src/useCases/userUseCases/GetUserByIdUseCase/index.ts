import { database } from "../../../repositories";
import { GetUserByIdController } from "./GetUserByIdController";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

const getUserByIdUseCase = new GetUserByIdUseCase(database)
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

export { getUserByIdController }