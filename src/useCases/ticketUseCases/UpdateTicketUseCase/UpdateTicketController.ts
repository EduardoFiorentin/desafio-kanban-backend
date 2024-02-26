import { Request, Response } from "express";
import { UpdateTicketUseCase } from "./UpdateTicketUseCase";

class UpdateTicketController {
    constructor(
        private updateTicketUseCase: UpdateTicketUseCase
    ){}

    async handle(req: Request, res: Response) {
        try {

            const { id } = req.params
            const { title, id_board, description, id_creator, id_accountable, type } = req.body
            const update = await this.updateTicketUseCase.execute({id, id_board, title, description, id_creator, id_accountable, type })

            console.log("update: ", update)

            if (update.length !== 0) {
                return res.status(200).json({
                    status: 200,
                    message: "Ticket atualizado",
                    data: update
                })
            } else return res.status(400).json({ status: 400, message: "Um erro inesperado aconteceu!" })

        } catch(err) {
            console.log(err)
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }
}

export { UpdateTicketController }