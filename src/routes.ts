import { Request, Response, Router } from "express";
import { database } from "./repositories";
import { createUserController } from "./useCases/userUseCases/CreateUserUseCase";
import { getUserController } from "./useCases/userUseCases/GetUserUseCase";
import { getUserByIdController } from "./useCases/userUseCases/GetUserByIdUseCase";
import { updateUserController } from "./useCases/userUseCases/UpdateUserUseCase";
import { deleteUserController } from "./useCases/userUseCases/DeleteUserUseCase";

const router = Router() 

router.get("/users", async (req: Request, res: Response) => {
    return getUserController.handle(req, res)
})

router.get("/users/:id", async (req: Request, res: Response) => {
    return getUserByIdController.handle(req, res)
})

router.post('/users', (req: Request, res: Response) => {
    return createUserController.handle(req, res)
})

router.put('/users/:id', (req: Request, res: Response) => {
    return updateUserController.handle(req, res)
})

router.delete('/users/:id', (req: Request, res: Response) => {
    return deleteUserController.handle(req, res)
})

export { router }
