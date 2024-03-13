import { Request, Response } from "express";
import { GetBoardsUseCase } from "./GetBoardsUseCase";

class GetBoardsController {
    constructor(
        private getBoardUseCase: GetBoardsUseCase
    ){}


    async handle (req: Request, res: Response) {
        try {

            const boards = await this.getBoardUseCase.execute(req)
            
            if (boards.sucess) {
                return res.status(200).json({status: 200, message: "Operação realizada com sucesso!", data: boards.data})
            } else {
                return res.status(400).json({status: 400, message: boards.message})
            }

        } catch (err) {
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }
}

export { GetBoardsController }

