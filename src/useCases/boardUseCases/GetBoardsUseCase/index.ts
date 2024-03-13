import { boardDatabase } from "../../../repositories";
import { GetBoardsController } from "./GetBoardsController";
import { GetBoardsUseCase } from "./GetBoardsUseCase";

const getBoardUseCase = new GetBoardsUseCase(boardDatabase)
const getBoardsController = new GetBoardsController(getBoardUseCase)

export {
    getBoardsController
}