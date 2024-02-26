import { IUpdateTicketRequestDTO } from "../useCases/ticketUseCases/UpdateTicketUseCase/UpdateTicketRequestDTO";

const generateUpdateSqlTicket = (updateData: IUpdateTicketRequestDTO) => {
    let updateFields = [];

    if (updateData.hasOwnProperty('id_board')) {
        if (updateData.id_board !== undefined) updateFields.push(`id_board = '${updateData.id_board}'`);
    }

    if (updateData.hasOwnProperty('title')) {
        if (updateData.title !== undefined) updateFields.push(`title = '${updateData.title}'`);
    }

    if (updateData.hasOwnProperty('description')) {
        if (updateData.description !== undefined) updateFields.push(`description = '${updateData.description}'`);
    }

    if (updateData.hasOwnProperty('id_creator')) {
        if (updateData.id_creator !== undefined) updateFields.push(`id_creator = '${updateData.id_creator}'`);
    }

    if (updateData.hasOwnProperty('id_accountable')) {
        if (updateData.id_accountable !== undefined) updateFields.push(`id_accountable = '${updateData.id_accountable}'`);
    }

    if (updateData.hasOwnProperty('type')) {
        if (updateData.type !== undefined) updateFields.push(`type = '${updateData.type}'`);
    }

    if (updateFields.length > 0) {
        const updateQuery = `UPDATE ticket SET ${updateFields.join(', ')} WHERE id_ticket = ?;`;
        return updateQuery;
    } else {
        return ''; 
    }
}

export { generateUpdateSqlTicket }


// interface IUpdateTicketRequestDTO {
//     id: string, 
//     id_board: string, 
//     title: string, 
//     description: string, 
//     id_creator: string, 
//     id_accountable: string, 
//     type: 'Bem'|'Predial'|'Procedimento'
// }