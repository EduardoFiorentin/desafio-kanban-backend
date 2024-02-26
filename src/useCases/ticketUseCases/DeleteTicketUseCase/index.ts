import { ticketDatabase } from "../../../repositories";
import { DeleteTicketController } from "./deleteTicketController";
import { DeleteTicketUseCase } from "./deleteTicketUseCase";

const deleteTicketUseCase = new DeleteTicketUseCase(ticketDatabase)
const deleteTicketController = new DeleteTicketController(deleteTicketUseCase)

export { deleteTicketController }