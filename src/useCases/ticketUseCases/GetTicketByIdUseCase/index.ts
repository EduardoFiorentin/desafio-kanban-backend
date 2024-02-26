import { ticketDatabase } from "../../../repositories";
import { GetTicketByIdController } from "./GetTicketByIdController";
import { GetTicketByIdUseCase } from "./GetTicketByIdUseCase";

const getTicketsUseCase = new GetTicketByIdUseCase(ticketDatabase)
const getTicketByIdController = new GetTicketByIdController(getTicketsUseCase) 

export { getTicketByIdController }