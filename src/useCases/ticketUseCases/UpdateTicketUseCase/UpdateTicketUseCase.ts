import { ITicketRepository } from "../../../repositories/ITicketRepository";
import { IUpdateTicketRequestDTO } from "./UpdateTicketRequestDTO";

class UpdateTicketUseCase {
    constructor(
        private ticketRepository: ITicketRepository
    ){}

    async execute(data: IUpdateTicketRequestDTO) {
        try {

            const update = await this.ticketRepository.updateTicket(data)
            return update

        } catch (err) {
            throw new Error("use case error")
        }
    }
}

export { UpdateTicketUseCase }