import { Board } from "../../entities/Board";
import { MySQLDatabase } from "../../infrastructure/MySQLDatabase/MySQLDatabase";
import { IBoardRepository } from "../IBoardRepository";

class MySqlBoardRepository implements IBoardRepository {
    constructor(
        private connection: MySQLDatabase
    ){}

    async createBoard(board: Board): Promise<boolean> {
        try {

            const query = 'INSERT INTO board ("id_board", "id_creator", "title", "description") VALUES (?, ?, ?, ?);'
            await this.connection.query(query, [board.id_board, board.id_creator, board.title, board.description])

            const queryNewBoard = "SELECT * FROM board WHERE id_board == ?;"
            const newBoard = await this.connection.query(queryNewBoard, [board.id_board])
            if (newBoard) return true 
            else return false

        } catch (err) {
            console.log(err)
            throw new Error("Erro no create board - board repository")
        }
    }
}

export { MySqlBoardRepository }