import { Request, Response } from "express";
import { UpdateBoardUseCase } from "./UpdateBoardUseCase";

class UpdateBoardController {
    constructor(
        private updateBoardUseCase: UpdateBoardUseCase
    ){}


    async handle (req: Request, res: Response) {
        try {

            const { id } = req.params
            const { id_creator, title, description } = req.body

            const updateBoard = await this.updateBoardUseCase.execute({id, id_creator, title, description}, req)

            if (updateBoard) {
                return res.status(200).json({status: 200, message: "Board modificado com sucesso!"})
            } else return res.status(400).json({status: 400, message: "Não foi possível realizar a operação!"})

        } catch (err) {
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }
}

export { UpdateBoardController }