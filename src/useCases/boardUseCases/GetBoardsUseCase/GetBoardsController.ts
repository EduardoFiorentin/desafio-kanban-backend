import { Request, Response } from "express";
import { GetBoardsUseCase } from "./getBoardsUseCase";

class GetBoardsController {
    constructor(
        private getBoardUseCase: GetBoardsUseCase
    ){}


    async handle (req: Request, res: Response) {
        try {

            const boards = this.getBoardUseCase.execute(req)
            return res.status(200).json({status: 200, message: "Operação finalizada com sucesso!", data: boards})

        } catch (err) {
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }
}

export { GetBoardsController }


// terminar a lógica daqui e implementar 