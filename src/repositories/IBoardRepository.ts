import { Board } from "../entities/Board"

interface IBoardRepository {
    createBoard(board: Board): Promise<boolean>
}

export { IBoardRepository }