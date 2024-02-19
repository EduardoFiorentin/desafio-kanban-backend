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

            if (users.length === 0) {
                return res.status(400).json({
                    status: 400,
                    message: "Usuário não encontrado"
                }) 
            } else {
                return res.status(400).json({
                    status: 200,
                    message: "Operação finalizada com sucesso",
                    data: [
                        {
                            id: users[0].id,
                            name: users[0].name
                        }
                    ]
                })
            }
            
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