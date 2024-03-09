import { Request, Response } from "express";
import { allPropertiesDefined } from "../../../utils/allPropertiesDefined";
import { CreateBoardUseCase } from "./CreateBoardUseCase";

class CreateBoardController {
    constructor(
        private createBoardUseCase: CreateBoardUseCase
    ){}

    async handle(req: Request, res: Response) {
        try {

            const {id_creator, title, description} = req.body
            console.log({id_creator, title, description})
            const allDefined = allPropertiesDefined({id_creator, title, description})

            // console.log(allDefined)

            if (allDefined) {

                const createBoard = await this.createBoardUseCase.execute({id_creator, title, description}, req)
                if (createBoard.created) return res.status(200).json({status: 200, message: "Board criado"})
                else return res.status(400).json({status: 400, message: createBoard.message})

            } return res.status(400).json({status: 400, message: "Há dados faltando"})

        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: 500,
                message: "Um erro inesperado aconteceu!"
            })
        }
    }
}

export { CreateBoardController }