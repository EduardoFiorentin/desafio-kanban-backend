import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

class GetUserByIdController {
    constructor(
        private getUserByIdUseCase: GetUserByIdUseCase
    ){}

    async handle(req: Request, res: Response) {

        try {
            const { id } = req.params

            const getUser = await this.getUserByIdUseCase.execute(id)

            if (getUser.sucess) {
                return res.status(200).json({
                    status: 200,
                    message: "Usuário encontrado!",
                    data: getUser.data
                })
            } else {
                return res.status(400).json({
                    status: 400,
                    message: "Usuário não encontrado"
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