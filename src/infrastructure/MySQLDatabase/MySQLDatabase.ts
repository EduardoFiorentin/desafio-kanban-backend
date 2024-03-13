import mysql, { ConnectionOptions } from 'mysql2/promise'

class MySQLDatabase {
    private connection

    constructor() {
    const access: ConnectionOptions = {
        host: 'localhost',
        password: "admin",
        user: 'root',
        database: 'kanban',
        };

        try {
            this.connection = mysql.createPool(access);
        } catch(err) {
            console.log("Erro de conexão database: ", err)
        }
    }

    async query(sql:string, params: string[]) {
        try {
            const query = await this.connection?.query(sql, params)
            console.log(query)
            if(query) return query[0]
            return []
            
        } catch(err) {
            console.log(err)
            return false
        }
    }

    close() {
        if (this.connection) {
            return this.connection.end();
        }
    }
}

export { MySQLDatabase };