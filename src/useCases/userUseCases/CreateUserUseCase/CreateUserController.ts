import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(req: Request, res: Response) {
        const body = req.body

        try {
            const createdUser = await this.createUserUseCase.execute(body)
            if (createdUser) {
                return res.status(201).json({
                    status: 201,
                    message: "Usuário criado!"
                })
            } else {
                return res.status(400).json({
                    status: 400,
                    message: "Erro! Verifique as informações e tente novamente!"
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

export { CreateUserController } 