import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ){}

    async handle(req: Request, res: Response) {
        const { id } = req.params

        try {
            
            const deleteUser = await this.deleteUserUseCase.execute(id)

            if (deleteUser) {
                return res.status(201).json({
                    status: 201,
                    message: "Usuário deletado!"
                })

            } else {
                return res.status(400).json({
                    status: 400,
                    message: "Erro! Verifique as informações e tente novamente!"
                })
            }

        } catch(err) {
            console.log("Erro no delete: ", err)
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }
}

export { DeleteUserController }