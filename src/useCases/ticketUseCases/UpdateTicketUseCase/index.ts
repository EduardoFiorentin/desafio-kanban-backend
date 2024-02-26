import { ticketDatabase } from "../../../repositories";
import { UpdateTicketController } from "./UpdateTicketController";
import { UpdateTicketUseCase } from "./UpdateTicketUseCase";

const updateTicketUseCase = new UpdateTicketUseCase(ticketDatabase)
const updateTicketController = new UpdateTicketController(updateTicketUseCase) 

export { updateTicketController }