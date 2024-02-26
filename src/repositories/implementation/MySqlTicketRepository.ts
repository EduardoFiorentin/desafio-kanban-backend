import { query } from "express";
import { Ticket } from "../../entities/Ticket";
import { MySQLDatabase } from "../../infrastructure/MySQLDatabase/MySQLDatabase";
import { ITicketRepository } from "../ITicketRepository";
import { generateUpdateSqlTicket } from "../../utils/generateUpdateTicket";
import { IUpdateTicketRequestDTO } from "../../useCases/ticketUseCases/UpdateTicketUseCase/UpdateTicketRequestDTO";

class MySqlTicketRepository implements ITicketRepository {
    constructor(
        private connection: MySQLDatabase
    ){}

    async createTicket({id_ticket, id_board, title, description, id_creator, id_accountable, type}: Ticket): Promise<boolean> {
        try {
            const query = "INSERT INTO ticket(id_ticket, id_board, title, description, id_creator, id_accountable, type) VALUES (?, ?, ?, ?, ?, ?, ?)"
            await this.connection.query(query, [id_ticket, id_board, title, description, id_creator, id_accountable, type])

            const newTicket= await this.connection.query('select * from ticket where id_ticket=?', [id_ticket])
            console.log('new ticket: ', newTicket)
            if (newTicket) return true
            else return false

        } catch(err) {
            throw new Error("Repository error - create user")
        }
    }

    async getTickets(): Promise<Ticket[]> {
        const query = "SELECT * FROM ticket;"
        const tickets = await this.connection.query(query, [])
        return tickets as Ticket[]
    }

    async getTicketById(id: string): Promise<Ticket[]> {
        try {

            const query = 'SELECT * FROM ticket WHERE id_ticket=?;'
            const ticket = await this.connection.query(query, [id])
            return ticket as Ticket[]

        } catch (err) {
            throw new Error("ticket repository")
        }
    }

    async updateTicket(data: IUpdateTicketRequestDTO): Promise<Ticket[]> {
        try {

            const query_update = generateUpdateSqlTicket(data)
            console.log(query_update)
            if (query_update) {
                await this.connection.query(query_update, [data.id])
                const query_ticket = 'SELECT * FROM ticket WHERE id_ticket=?;'
                const ticket = await this.connection.query(query_ticket, [data.id])
                return ticket as Ticket[]
            } else {
                return []
            }

        } catch (err) {
            throw new Error("Repository update error")
        }
    }

    async deleteTicket(id: string): Promise<boolean> {
        try {

            const ticketExists = await this.getTicketById(id)
            if (ticketExists.length !== 0) {
                
                try {   

                    const query = "DELETE FROM ticket WHERE id_ticket=?"
                    const deleted: any = await this.connection.query(query, [id])
                    console.log("Passou e vai dar merda", deleted)
                    if (deleted?.affectedRows !== 0) return true
                    return false

                } catch (err) {
                    console.log(err)
                    throw new Error("Erro na deleção do ticket")
                }

            } else {
                return false
            }

        } catch (err) {
            console.log(err)
            throw new Error("Erro no repositorio ticket - delete ticket")
        }
    }
}

export { MySqlTicketRepository }


