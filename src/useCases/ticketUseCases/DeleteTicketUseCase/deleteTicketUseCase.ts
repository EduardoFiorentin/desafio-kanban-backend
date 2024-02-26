import { ITicketRepository } from "../../../repositories/ITicketRepository";

class DeleteTicketUseCase {
    constructor(
        private ticketRepository: ITicketRepository
    ){}

    async execute(id: string): Promise<boolean> {
        try {
            const deleteTicket = await this.ticketRepository.deleteTicket(id)
            if (deleteTicket) return true
            else return false 
            
        } catch (err) {
            console.log(err)
            throw new Error("Erro no use case delete ticket")
        }
    }
}

export { DeleteTicketUseCase }