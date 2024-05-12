import { Request } from "express";
import { IBoardRepository } from "../../../repositories/IBoardRepository";
import { validateUserUseCase } from "../../userUseCases/ValidateTokenUseCase";

class DeleteBoardUseCase {
    constructor(
        private boardRepository: IBoardRepository
    ){}

    async execute(id: string, req: Request) {
        try {

            // validar permissão 
            if (!validateUserUseCase.auth(req.headers['authorization'])) return false

            const deleteBoard = await this.boardRepository.deleteBoard(id)
            return deleteBoard

        } catch(err) {
            console.log(err)
            throw new Error("Erro deleteBoardUseCase")
        }
    }

}

export { DeleteBoardUseCase }