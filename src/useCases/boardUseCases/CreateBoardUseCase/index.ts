import { boardDatabase } from "../../../repositories";
import { CreateBoardController } from "./CreateBoardController";
import { CreateBoardUseCase } from "./CreateBoardUseCase";

const createBoardUseCase = new CreateBoardUseCase(boardDatabase)
const createBoardController = new CreateBoardController(createBoardUseCase)

export { createBoardController }