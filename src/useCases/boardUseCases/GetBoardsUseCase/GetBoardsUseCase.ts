import { Request } from "express";
import { IBoardRepository } from "../../../repositories/IBoardRepository";
import { Board } from "../../../entities/Board";

class GetBoardsUseCase {
    constructor(
        private boardRepository: IBoardRepository
    ){}

    async execute( req: Request): Promise<Board[] | boolean> {
        try {

            // verificação do usuário


            return await this.boardRepository.getBoards()

        }  catch (err) {
            console.log(err)
            throw new Error("Erro no update board - board use case")
        }
    }
}

export { GetBoardsUseCase }