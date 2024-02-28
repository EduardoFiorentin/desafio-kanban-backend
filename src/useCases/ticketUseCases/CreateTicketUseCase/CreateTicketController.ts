import { Request, Response } from "express";
import { allPropertiesDefined } from "../../../utils/allPropertiesDefined";
import { CreateTicketUseCase } from "./CreateTicketUseCase";

class CreateTicketController {

    constructor(
        private createTicketUseCase: CreateTicketUseCase
    ){}

    async handle(req: Request, res: Response) {
        try {
            const {
                id_board,
                title,
                description,
                id_creator,
                id_accountable,
                type,
            } = req.body

            const allDefined = allPropertiesDefined({
                id_board,
                title,
                description,
                id_creator,
                id_accountable,
                type,
            })

            if (allDefined) {
                const createTicket = await this.createTicketUseCase.execute({
                    id_board,
                    title,
                    description,
                    id_creator,
                    id_accountable,
                    type,
                }, req)
                if (createTicket.created) return res.status(200).json({status: 200, message: "Ticket criado"})
                else return res.status(400).json({status: 400, message: createTicket.message})

            }
            else return res.status(400).json({status: 400, message: "Há dados faltando"})

        } catch(err) {
            console.log(err)
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }

    }
}

export { CreateTicketController }
