import { Request } from "express";
import { IBoardRepository } from "../../../repositories/IBoardRepository";
import { ICreateBoardDTO } from "./CreateBoardDTO";
import { validateUserUseCase } from "../../userUseCases/ValidateUserUseCase";
import { Board } from "../../../entities/Board";

type ControllerResponse = {created: boolean, message: string} 

class CreateBoardUseCase {
    constructor(
        private boardRepository: IBoardRepository
    ){}

    async execute(data: ICreateBoardDTO, req: Request): Promise<ControllerResponse>{
        try {

            if (!validateUserUseCase.auth(req.headers['authorization'])) return { created: false, message: "Operação não autorizada" }

            if (data.id_creator.length !== 36) return {created: false, message: "Id do criador tem tamanho incorreto"}
            if (data.title.length > 255 || data.title.length < 1) return {created: false, message: "Título muito grande ou não definido"}
            if (data.description.length > 255 || data.description.length < 1) return {created: false, message: "Descrissão muito grande ou não definida"} 

            const newBoard = new Board({
                id_creator: data.id_creator,
                title: data.title,
                description: data.description
            })

            const createBoard = await this.boardRepository.createBoard(newBoard)

            if (createBoard.length !== 0) return {created: true, message: ''}
            else  return {created: false, message: 'Não foi possível criar um novo quadro!'}

        } catch (err) {
            console.log(err)
            throw new Error("Erro no use case create board")
        }
    }
}

export { CreateBoardUseCase }