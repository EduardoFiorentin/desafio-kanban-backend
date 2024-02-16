import { MySQLDatabase } from "../infrastructure/MySQLDatabase/MySQLDatabase";
import { MySqlUserRepository } from "./implementation/MySqlUserRepository";

const connection = new MySQLDatabase()
const database = new MySqlUserRepository(connection)

export { database }