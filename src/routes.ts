import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/userUseCases/CreateUserUseCase";
import { getUserController } from "./useCases/userUseCases/GetUserUseCase";
import { getUserByIdController } from "./useCases/userUseCases/GetUserByIdUseCase";
import { updateUserController } from "./useCases/userUseCases/UpdateUserUseCase";
import { deleteUserController } from "./useCases/userUseCases/DeleteUserUseCase";
import { createTicketController } from "./useCases/ticketUseCases/CreateTicketUseCase";
import { getTicketsController } from "./useCases/ticketUseCases/GetTicketsUseCase";
import { getTicketByIdController } from "./useCases/ticketUseCases/GetTicketByIdUseCase";
import { updateTicketController } from "./useCases/ticketUseCases/UpdateTicketUseCase";
import { deleteTicketController } from "./useCases/ticketUseCases/DeleteTicketUseCase";

const router = Router() 

// USERS

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


// TICKETS
router.post("/tickets", (req: Request, res: Response) => {
    return createTicketController.handle(req, res)
})

router.get('/ticket', (req: Request, res: Response) => {
    return getTicketsController.handle(req, res)
})

router.get('/ticket/:id', (req: Request, res: Response) => {
    return getTicketByIdController.handle(req, res)
})

router.put('/ticket/:id', (req: Request, res: Response) => {
    return updateTicketController.handle(req, res)
})

router.delete("/ticket/:id",
 (req: Request, res: Response) => {
    return deleteTicketController.handle(req, res)
})


export { router }
