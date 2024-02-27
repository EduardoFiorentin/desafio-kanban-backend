import { userDatabase } from "../../../repositories";
import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";

const authUserUseCase = new AuthUserUseCase(userDatabase)
const authUserController = new AuthUserController(authUserUseCase)

export { authUserController }