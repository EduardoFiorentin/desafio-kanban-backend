import { uuid } from "uuidv4"

class Board {
    public readonly id_board: string
    public readonly id_creator: string
    public title: string
    public description: string

    constructor(props: Omit<Board, "id_board">) {
        this.id_board = uuid()
        this.id_creator = props.id_creator,
        this.title = props.title,
        this.description = props.description
    }
}

export { Board }