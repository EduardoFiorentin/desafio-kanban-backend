import { database } from "../../../repositories";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const deleteUserUseCase = new DeleteUserUseCase(database)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController }