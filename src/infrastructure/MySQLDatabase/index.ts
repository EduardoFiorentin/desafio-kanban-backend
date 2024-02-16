import { MySQLDatabase } from "./MySQLDatabase";

const databaseConnection = new MySQLDatabase() 

export { databaseConnection as database }