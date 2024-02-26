import { ticketDatabase } from "../../../repositories";
import { CreateTicketController } from "./CreateTicketController";
import { CreateTicketUseCase } from "./CreateTicketUseCase";


const createTicketUseCase = new CreateTicketUseCase(ticketDatabase)
const createTicketController = new CreateTicketController(createTicketUseCase) 

export { createTicketController }