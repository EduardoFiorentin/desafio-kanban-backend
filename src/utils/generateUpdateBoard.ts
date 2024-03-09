import { IUpdateBoardRequestDTO } from "../useCases/boardUseCases/UpdateBoardUseCase/UpdateBoardRequestDTO";

const generateUpdateSqlBoard = (updateData: IUpdateBoardRequestDTO) => {
    let updateFields = [];

    if (updateData.hasOwnProperty('id_board')) {
        if (updateData.id_creator !== undefined) updateFields.push(`id_creator = '${updateData.id_creator}'`);
    }

    if (updateData.hasOwnProperty('title')) {
        if (updateData.title !== undefined) updateFields.push(`title = '${updateData.title}'`);
    }

    if (updateData.hasOwnProperty('description')) {
        if (updateData.description !== undefined) updateFields.push(`description = '${updateData.description}'`);
    }


    if (updateFields.length > 0) {
        const updateQuery = `UPDATE board SET ${updateFields.join(', ')} WHERE id_board = ?;`;
        return updateQuery;
    } else {
        return ''; 
    }
}

export { generateUpdateSqlBoard }