import { userDatabase } from "../../../repositories";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const deleteUserUseCase = new DeleteUserUseCase(userDatabase)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController }