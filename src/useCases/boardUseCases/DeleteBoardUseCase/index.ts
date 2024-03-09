import { boardDatabase } from "../../../repositories";
import { DeleteBoardController } from "./DeleteBoardController";
import { DeleteBoardUseCase } from "./DeleteBoardUseCase";

const deleteBoardUseCase = new DeleteBoardUseCase(boardDatabase)
const deleteBoardController = new DeleteBoardController(deleteBoardUseCase)


export { deleteBoardController }
