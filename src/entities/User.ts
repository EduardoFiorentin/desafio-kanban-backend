import { uuid } from "uuidv4"

class User {
    public readonly id: string
    public name: string
    public login: string
    public password: string


    constructor(props: Omit<User, 'id'>, id?: string) {
        this.name = props.name
        this.login = props.login
        this.password = props.password

        if (!id) {
            this.id = uuid() 
        } else this.id = id
    }
}
export { User }