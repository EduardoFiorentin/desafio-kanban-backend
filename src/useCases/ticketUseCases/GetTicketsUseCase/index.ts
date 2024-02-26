import { ticketDatabase } from "../../../repositories";
import { GetTicketsController } from "./GetTicketsController";
import { GetTicketsUseCase } from "./GetTicketsUseCase";

const getTicketsUseCase = new GetTicketsUseCase(ticketDatabase)
const getTicketsController = new GetTicketsController(getTicketsUseCase) 

export { getTicketsController }