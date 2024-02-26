import { ITicketRepository } from "../../../repositories/ITicketRepository";

class GetTicketByIdUseCase {
    constructor(
        private ticketsRepository: ITicketRepository
    ){}

    async execute(id: string) {
        try {
            const ticket = await this.ticketsRepository.getTicketById(id)
            console.log('use case ticket: ', ticket)
            return ticket
            
        } catch (err) {
            throw new Error("use case get tickets err")
        }
    }
}
export { GetTicketByIdUseCase }