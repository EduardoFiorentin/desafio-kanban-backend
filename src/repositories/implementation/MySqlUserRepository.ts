import { User } from "../../entities/User";
// import { IUserJson } from "../../entities/types/userJson";
import { MySQLDatabase } from "../../infrastructure/MySQLDatabase/MySQLDatabase";
import { IAuthUserDTO } from "../../useCases/userUseCases/AuthUserUserCase/AuthUserDTO";
import { IUpdateUserRequestDTO } from "../../useCases/userUseCases/UpdateUserUseCase/UpdateUserRequestDTO";
import { generateUpdateSqlUser } from "../../utils/generateUpdateUser";
import { IUsersRepository } from "../IUsersRepository";

const jwt = require('jsonwebtoken')
require('dotenv').config()

class MySqlUserRepository implements IUsersRepository {

    constructor(
        private connection: MySQLDatabase
    ){}

    async createUser(user: User): Promise<boolean> {
        try {
            const newUser = await this.connection.query(
                "INSERT INTO users(id, name, login, password) VALUES (?, ?, ?, ?);", 
                [user.id, user.name, user.login, user.password]
            )
            if (newUser) return true
            else return false 

        } catch(err) {
            throw new Error(`Erro criação de user: ${err}`)
        }
    }

    async deleteUser(id: string): Promise<boolean> {
        try {

            const userExists = await this.getUsersById(id)
            if (userExists.length !== 0) {
                const deleteUser = this.connection.query("DELETE FROM users WHERE id=?;", [id])
                const deleted = deleteUser
                    .then(() =>  true)
                    .catch(() => false)
    
                    console.log("aqui otario ", deleteUser)
    
                return deleted

            } else return false


        } catch (err) {
            throw new Error(`Erro no delete: ${err}`)
        }
    }

    async getUsers(): Promise<User[]> {
        try {
            const users = await this.connection.query("SELECT id, name FROM users;", [])
            console.log("get: ", users)
            return users as User[] 
            
        } catch(err) {
            throw new Error(`Erro getuser: ${err}`)
        }
    }

    async getUsersById(id: string): Promise<User[]> {
        try {
            console.log(id)
            const users = await this.connection.query("SELECT * FROM users WHERE id=?;", [id])
            console.log("get: ", users)
            return users as User[] 
            
        } catch(err) {
            throw new Error(`Erro getuserbyid: ${err}`)
        }
    }

    async updateUser(modObj: IUpdateUserRequestDTO): Promise<boolean> {
        const query = generateUpdateSqlUser(modObj)
        if (query) {
            console.log(query)
            const updateUser = await this.connection.query(query, [modObj.id])
            return true
        } else return false 
    }

    async auth(login: string, password: string): Promise<IAuthUserDTO | null> {
        try {

            await new Promise(resolve => setTimeout(resolve, 2000))

            const query = "SELECT * FROM users WHERE login=?"
            const userFound: any = await this.connection.query(query, [login])

            console.log("userFound ",userFound)

            if (userFound.length !== 0) {

                if (userFound[0].password === password) {

                    // gerar token de acesso
                    const secret = process.env.SECRET
                    console.log("secret", process.env.SECRET)
                    const token = jwt.sign({}, secret)

                    console.log("teste de pass: ", userFound[0].password === password, userFound[0].password)
                    return {
                        id: userFound[0].id,
                        login: userFound[0].login,
                        name: userFound[0].name,
                        token
                    } as IAuthUserDTO

                } else return null

            } else return null

        } catch(err) {
            console.log(err)
            throw new Error("Erro no auth")
        }
    }
}

export { MySqlUserRepository }