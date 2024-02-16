import { database } from "../../../repositories";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const updateUserUseCase = new UpdateUserUseCase(database)
const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController }