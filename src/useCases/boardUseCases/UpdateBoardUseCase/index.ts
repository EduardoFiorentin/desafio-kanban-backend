import { boardDatabase } from "../../../repositories";
import { UpdateBoardController } from "./UpdateBoardController";
import { UpdateBoardUseCase } from "./UpdateBoardUseCase";

const updateBoardUseCase = new UpdateBoardUseCase(boardDatabase)
const updateBoardController = new UpdateBoardController(updateBoardUseCase)

export { updateBoardController }