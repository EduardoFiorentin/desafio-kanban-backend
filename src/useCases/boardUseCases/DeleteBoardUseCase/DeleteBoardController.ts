import { Request, Response } from "express";
import { DeleteBoardUseCase } from "./DeleteBoardUseCase";

class DeleteBoardController {
    constructor(
        private deleteBoardUseCase: DeleteBoardUseCase
    ){}

    async handle(req: Request, res: Response) {
        try {

            const { id } = req.params

            const deleteBoard = await this.deleteBoardUseCase.execute(id, req)

            if (deleteBoard) {
                return res.status(200).json({status: 200, message: "Quadro deletado com sucesso!"})
            } else {
                return res.status(400).json({status: 400, message: "Não foi possível realizar a operação! Verifique se você forneceu o id correto e tem autorização para realizar esta operação."})
            }

        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }

}

export { DeleteBoardController }