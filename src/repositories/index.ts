import { MySQLDatabase } from "../infrastructure/MySQLDatabase/MySQLDatabase";
import { MySqlTicketRepository } from "./implementation/MySqlTicketRepository";
import { MySqlUserRepository } from "./implementation/MySqlUserRepository";

const connection = new MySQLDatabase()
const userDatabase = new MySqlUserRepository(connection)
const ticketDatabase = new MySqlTicketRepository(connection)

export { userDatabase, ticketDatabase }