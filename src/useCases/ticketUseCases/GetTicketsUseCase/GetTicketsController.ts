import { Request, Response } from "express";
import { GetTicketsUseCase } from "./GetTicketsUseCase";

class GetTicketsController {
    constructor(
        private getTicketsUseCase: GetTicketsUseCase
    ){}

    async handle(req: Request, res: Response) {
        try {

            const tickets = await this.getTicketsUseCase.execute()
            return res.status(200).json({status: 200, message: "requisição bem sucedida!", data: tickets})

        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }
}

export {GetTicketsController}