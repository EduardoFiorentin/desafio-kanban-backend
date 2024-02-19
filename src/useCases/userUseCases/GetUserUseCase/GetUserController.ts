import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
    constructor(
        private getUserUseCase: GetUserUseCase
    ){}

    async handle(req: Request, res: Response) {

        try {
            const users = await this.getUserUseCase.execute()
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

export { GetUserController }