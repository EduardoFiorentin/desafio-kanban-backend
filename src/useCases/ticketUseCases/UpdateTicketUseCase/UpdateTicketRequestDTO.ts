interface IUpdateTicketRequestDTO {
    id: string, 
    id_board?: string, 
    title?: string, 
    description?: string, 
    id_creator?: string, 
    id_accountable?: string, 
    type?: 'Bem'|'Predial'|'Procedimento'
}

export { IUpdateTicketRequestDTO }