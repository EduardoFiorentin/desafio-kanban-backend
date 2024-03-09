import { Board } from "../entities/Board"
import { IUpdateBoardRequestDTO } from "../useCases/boardUseCases/UpdateBoardUseCase/UpdateBoardRequestDTO"

interface IBoardRepository {
    createBoard(board: Board): Promise<boolean>,
    updateBoard(modObj: IUpdateBoardRequestDTO): Promise<boolean>,
    deleteBoard(id: string): Promise<boolean>,
    getBoards(): Promise<Board[]>
}

export { IBoardRepository }