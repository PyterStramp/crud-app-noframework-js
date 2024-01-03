//mapper -< cambiar la estructuración de una data

import { User } from "../models/user";

/**
 * Mapper del usuario
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) => {

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;

    return new User({
        avatar: avatar,
        balance: balance,
        firstName: first_name,
        gender: gender,
        id: id,
        isActive: isActive,
        lastName: last_name,
    });
}
