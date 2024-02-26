import { uuid } from "uuidv4"

class Ticket {
    public readonly id_ticket: string
    public id_board: string
	public title: string
	public description: string
	public id_creator: string
	public id_accountable: string
	public type: 'Bem'|'Predial'|'Procedimento'

    constructor(props: Omit<Ticket, 'id_ticket'>){
        this.id_ticket = uuid()
        this.id_board = props.id_board
        this.title = props.title
        this.description = props.description
        this.id_creator = props.id_creator
        this.id_accountable = props.id_accountable
        this.type = props.type
    }
}

export { Ticket }