import { ticketDatabase } from "../../../repositories";
import { DeleteTicketController } from "./DeleteTicketController";
import { DeleteTicketUseCase } from "./DeleteTicketUseCase";

const deleteTicketUseCase = new DeleteTicketUseCase(ticketDatabase)
const deleteTicketController = new DeleteTicketController(deleteTicketUseCase)

export { deleteTicketController }