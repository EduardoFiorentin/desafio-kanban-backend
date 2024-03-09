import { Request } from "express";
import { IBoardRepository } from "../../../repositories/IBoardRepository";
import { IUpdateBoardRequestDTO } from "./UpdateBoardRequestDTO";
import { validateUserUseCase } from "../../userUseCases/ValidateUserUseCase";

class UpdateBoardUseCase {
    constructor(
        private boardRepository: IBoardRepository
    ){}

    async execute(modObj: IUpdateBoardRequestDTO, req: Request): Promise<boolean> {
        try {

            // validar permissão 
            if (!validateUserUseCase.auth(req.headers['authorization'])) return false

            // verificar validade dos novos dados
            if (modObj.id.length !== 36) return false
            if (modObj.id_creator && modObj.id_creator.length !== 36) return false
            if (modObj.title && modObj.title.length > 255) return false
            if (modObj.description && modObj.description.length > 255) return false


            const updateBoard = await this.boardRepository.updateBoard(modObj)
            if (updateBoard) return true
            else return false

        }  catch (err) {
            console.log(err)
            throw new Error("Erro no update board - board use case")
        }
    }
}

export { UpdateBoardUseCase }