import { userDatabase } from "../../../repositories";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const updateUserUseCase = new UpdateUserUseCase(userDatabase)
const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController }