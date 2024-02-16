import { IUpdateUserRequestDTO } from "../useCases/userUseCases/UpdateUserUseCase/UpdateUserRequestDTO";

const generateUpdateSqlUser = (updateData: IUpdateUserRequestDTO) => {
    let updateFields = [];

    if (updateData.hasOwnProperty('name')) {
        if (updateData.name !== undefined) updateFields.push(`name = '${updateData.name}'`);
    }

    if (updateData.hasOwnProperty('email')) {
        if (updateData.login !== undefined) updateFields.push(`.login = '${updateData.login}'`);
    }

    if (updateData.hasOwnProperty('password')) {
        if (updateData.password !== undefined) updateFields.push(`password = '${updateData.password}'`);
    }

    if (updateFields.length > 0) {
        const updateQuery = `UPDATE users SET ${updateFields.join(', ')} WHERE id = ?;`;
        return updateQuery;
    } else {
        return null; 
    }
}

export { generateUpdateSqlUser }