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
import { userDatabase } from "./repositories";
import { authUserController } from "./useCases/userUseCases/AuthUserUserCase";
import { createBoardController } from "./useCases/boardUseCases/CreateBoardUseCase";
import { deleteBoardController } from "./useCases/boardUseCases/DeleteBoardUseCase";
import { updateBoardController } from "./useCases/boardUseCases/UpdateBoardUseCase";
import { getBoardsController } from "./useCases/boardUseCases/GetBoardsUseCase";

const router = Router() 

// USERS

router.post('/auth', async (req: Request, res: Response) => {
    return authUserController.handle(req, res)
})

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

router.delete("/ticket/:id", (req: Request, res: Response) => {
    return deleteTicketController.handle(req, res)
})


// BOARD
router.post("/board", (req: Request, res: Response) => {
    return createBoardController.handle(req, res)
})

router.delete("/board/:id", (req: Request, res: Response) => {
    return deleteBoardController.handle(req, res)
})

router.put("/board/:id", (req: Request, res: Response) => {
    return updateBoardController.handle(req, res)
})

router.get("/board", (req: Request, res: Response) => {
    return getBoardsController.handle(req, res)
})

export { router }
