import { Request, Response } from "express";
import { DeleteTicketUseCase } from "./DeleteTicketUseCase";

class DeleteTicketController {
    constructor(
        private deleteTicketUseCase: DeleteTicketUseCase
    ){}

    async handle(req: Request, res: Response) {
        try {

            const { id } = req.params
            const deleteTicket = await this.deleteTicketUseCase.execute(id)

            if (deleteTicket) {
                return res.status(200).json({
                    status: 200,
                    message: "Ticket deletado!"
                })
            } else {
                return res.status(400).json({
                    status: 400,
                    message: "Não foi possível deletar o ticket! Verifique as informações e tente novamente"
                })
            }


        } catch(err) {
            return res.status(500).json({
                status: 500,
                message: "Ocorreu um erro inesperado!"
            })
        }
    }
}

export { DeleteTicketController }