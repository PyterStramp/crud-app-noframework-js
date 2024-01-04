import { loadUsersByPage } from "../use-cases/load-users";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage( state.currentPage + 1 );
    if (users.length === 0 ) return;

    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async() => {
    
    if ( state.currentPage <= 1 ) return;
    const users = await loadUsersByPage( state.currentPage - 1 );
    state.currentPage -= 1;
    state.users = users;
}

/**
 * 
 * @param {User} updatedUser 
 */
const onUserChanged = async(updatedUser) => {

    let founded = false;

    state.users = state.users.map (user => {
        if (user.id === updatedUser.id) {
            founded = true;
            return updatedUser;
        }
        return user;
    });

    if (state.users.length < 10 && !founded) {
        state.users.push( updatedUser );
    }
}

const reloadPage = async() => {
    throw new Error('No implementado');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}
