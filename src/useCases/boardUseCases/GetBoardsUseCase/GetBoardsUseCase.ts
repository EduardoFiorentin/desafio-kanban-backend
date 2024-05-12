import { Request } from "express";
import { IBoardRepository } from "../../../repositories/IBoardRepository";
import { Board } from "../../../entities/Board";
import { validateUserUseCase } from "../../userUseCases/ValidateTokenUseCase";

interface IBoardUseCaseDTO {
    sucess: boolean, 
    message: string,
    data: Board[]
}

class GetBoardsUseCase {
    constructor(
        private boardRepository: IBoardRepository
    ){}

    async execute( req: Request): Promise<IBoardUseCaseDTO> {
        try {

            // verificação do usuário
            if (!validateUserUseCase.auth(req.headers['authorization'])) return {sucess: false, message: "Operação não autorizada", data: []}


            const boards =  await this.boardRepository.getBoards()
            return { 
                sucess: true,
                message: "Operação realizada com sucesso!",
                data: boards
            }

        }  catch (err) {
            console.log(err)
            throw new Error("Erro no update board - board use case")
        }
    }
}

export { GetBoardsUseCase }