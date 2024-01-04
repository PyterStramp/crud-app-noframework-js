import { User } from "../models/user"

/**
 * 
 * @param {User} user 
 * @returns {User} user para el backend
 */
export const userModelToLocalhost = (user) => {

    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user;

    return {
        avatar: avatar,
        balance: balance,
        first_name: firstName,
        gender: gender,
        id: id,
        isActive: isActive,
        last_name: lastName,
    };
}