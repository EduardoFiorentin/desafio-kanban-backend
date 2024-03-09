import { Board } from "../../entities/Board";
import { MySQLDatabase } from "../../infrastructure/MySQLDatabase/MySQLDatabase";
import { IUpdateBoardRequestDTO } from "../../useCases/boardUseCases/UpdateBoardUseCase/UpdateBoardRequestDTO";
import { generateUpdateSqlBoard } from "../../utils/generateUpdateBoard";
import { IBoardRepository } from "../IBoardRepository";

class MySqlBoardRepository implements IBoardRepository {
    constructor(
        private connection: MySQLDatabase
    ){}

    async createBoard(board: Board): Promise<boolean> {
        try {

            const query = 'INSERT INTO board (id_board, id_creator, title, description) VALUES (?, ?, ?, ?);'
            await this.connection.query(query, [board.id_board, board.id_creator, board.title, board.description])

            const queryNewBoard = "SELECT * FROM board WHERE id_board=?;"
            const newBoard = await this.connection.query(queryNewBoard, [board.id_board])
            if (newBoard) return true 
            else return false

        } catch (err) {
            console.log(err)
            throw new Error("Erro no create board - board repository")
        }
    }

    async deleteBoard(id: string): Promise<boolean> {
        try {

            const query = "DELETE FROM board WHERE id_board=?"
            const deleted: any = await this.connection.query(query, [id])

            if (deleted?.affectedRows !== 0) return true
            return false
            
        }  catch (err) {
            console.log(err)
            throw new Error("Erro no delete board - board repository")
        }
    }

    async getBoards(): Promise<Board[]> {
        try {

            const query = "SELECT * FROM board;"
            const boards = await this.connection.query(query, [])

            return boards as Board[] 

        }  catch (err) {
            console.log(err)
            throw new Error("Erro no get board - board repository")
        }
    }

    async updateBoard(modObj: IUpdateBoardRequestDTO): Promise<boolean> {
        try {

            const query = generateUpdateSqlBoard(modObj)
            const updateBoard: any = await this.connection.query(query, [modObj.id])

            console.log("resultado", updateBoard)

            if (updateBoard.affectedRows !== 0) return true
            else return false

        }  catch (err) {
            console.log(err)
            throw new Error("Erro no update board - board repository")
        }
    }
}

export { MySqlBoardRepository }