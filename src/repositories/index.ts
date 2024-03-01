import { MySQLDatabase } from "../infrastructure/MySQLDatabase/MySQLDatabase";
import { MySqlBoardRepository } from "./implementation/MySqlBoardRepository";
import { MySqlTicketRepository } from "./implementation/MySqlTicketRepository";
import { MySqlUserRepository } from "./implementation/MySqlUserRepository";

const connection = new MySQLDatabase()
const userDatabase = new MySqlUserRepository(connection)
const ticketDatabase = new MySqlTicketRepository(connection)
const boardDatabase = new MySqlBoardRepository(connection)

export { userDatabase, ticketDatabase, boardDatabase }