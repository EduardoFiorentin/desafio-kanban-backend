import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

class AuthUserController {
    constructor(
        private authUserUseCase: AuthUserUseCase
    ){}

    async handle(req: Request, res: Response) {
        try {

            const { login, password } = req.body

            const authUser = await this.authUserUseCase.execute(login, password)

            if (authUser) {
                // resposta ao usuário
                return res.status(200).json({status: 200, message: "Usuário logado com sucesso!", data: authUser})
            }

            return res.status(400).json({status: 400, message: "LogIn não autorizado!"})

        } catch(err) {
            res.status(500).json({status: 500, message: "Um erro inesperado aconteceu"})
        }
    }
}

export { AuthUserController }