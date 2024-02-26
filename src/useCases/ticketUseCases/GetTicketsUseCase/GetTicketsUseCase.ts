import { ITicketRepository } from "../../../repositories/ITicketRepository";

class GetTicketsUseCase {
    constructor(
        private ticketsRepository: ITicketRepository
    ){}

    async execute() {
        try {
            const tickets = await this.ticketsRepository.getTickets()
            return tickets
            
        } catch (err) {
            throw new Error("use case get tickets err")
        }
    }
}
export { GetTicketsUseCase }