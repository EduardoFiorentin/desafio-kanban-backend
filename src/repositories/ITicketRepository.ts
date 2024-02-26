import { Ticket } from "../entities/Ticket";
import { IUpdateTicketRequestDTO } from "../useCases/ticketUseCases/UpdateTicketUseCase/UpdateTicketRequestDTO";

interface ITicketRepository {
    createTicket(ticket: Ticket): Promise<boolean>,
    getTickets(): Promise<Ticket[]>,
    getTicketById(id: string): Promise<Ticket[]>,
    updateTicket(data: IUpdateTicketRequestDTO): Promise<Ticket[]>,
    deleteTicket(id: string): Promise<boolean> 
}

export { ITicketRepository }