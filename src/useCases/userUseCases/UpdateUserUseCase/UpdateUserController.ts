import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ){}

    async handle(req: Request, res: Response) {
        const { name, login, password } = req.body
        const { id } = req.params

        try {

            const updateUser = await this.updateUserUseCase.execute({id, name, login, password }) 

            // console.log(updateUser)

            if (updateUser) {
                return res.status(201).json({
                    status: 201,
                    message: "Usuário atualizado!"
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

export { UpdateUserController } 