import { Request, Response } from "express";
import { GetTicketByIdUseCase } from "./GetTicketByIdUseCase";

class GetTicketByIdController {
    constructor(
        private getTicketByIdUseCase: GetTicketByIdUseCase
    ){}

    async handle(req: Request, res: Response) {
        try {
            const {id} = req.params
            const ticket = await this.getTicketByIdUseCase.execute(id)
            if (ticket.length !== 0) return res.status(200).json({status: 200, message: "requisição bem sucedida!", data: ticket})
            else return res.status(400).json({status: 400, message: "Usuário não encontrado"})

        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }
}

export { GetTicketByIdController }