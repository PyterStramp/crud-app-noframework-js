import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import {User} from '../models/user';
/**
 * Carga los usuarios según la página
 * @param {Number} page página
 * @returns {Promise<User[]>} 
 */
export const loadUsersByPage = async( page = 1 ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    const users = data.map( localhostUserToModel );

    return users;
}
