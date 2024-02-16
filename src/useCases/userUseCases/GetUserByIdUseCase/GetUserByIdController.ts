import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

class GetUserByIdController {
    constructor(
        private getUserByIdUseCase: GetUserByIdUseCase
    ){}

    async handle(req: Request, res: Response) {

        try {
            const { id } = req.params

            const users = await this.getUserByIdUseCase.execute(id)
            return res.status(200).json({
                status: 200,
                message: "Operação finalizada com sucesso",
                data: users
            })
            
        } catch(err) {
            console.log(err)
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }
}

export { GetUserByIdController } 