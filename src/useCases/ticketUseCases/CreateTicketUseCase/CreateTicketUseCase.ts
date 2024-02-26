import { title } from "process";
import { Ticket } from "../../../entities/Ticket";
import { ICreateTicketDTO } from "./CreateTicketRequestDTO";
import { ITicketRepository } from "../../../repositories/ITicketRepository";

class CreateTicketUseCase {
    constructor(
        private ticketRepository: ITicketRepository
    ){}

    async execute(data: ICreateTicketDTO) {
        try {

            // validações 
            if (data.id_board.length !== 36) return {created: false, message: "Id do quadro tem tamanho incorreto"}
            if (data.title.length > 255 || data.title.length < 1) return {created: false, message: "Título muito grande ou não definido"}
            if (data.description.length > 255 || data.description.length < 1) return {created: false, message: "Descrissão muito grande ou não definida"} 
            if (data.id_creator.length !== 36) return {created: false, message: "Id do criador tem tamanho incorreto"}
            if (data.id_accountable.length !== 36) return {created: false, message: "Id do responsável tem tamanho incorreto"}
            if (!['Bem','Predial','Procedimento'].includes(data.type)) return {created: false, message: "Tipo inválido"}

            const newTicket = new Ticket(Object.assign({}, data))
            const createTicket = await this.ticketRepository.createTicket(newTicket)
            console.log("Response create: ", createTicket)
            return {created: true, message: ""}

        } catch (err) {
            console.log(err)
            throw new Error("Erro de execução")
        }
    }
}

export { CreateTicketUseCase }
