import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACT, FETCH_CONTACTS } from "../types/constants";


// ex of action 
// action = {type:"ADD_CONTACT", data:{}}

export default (state = { contacts: [] }, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            {
                let contacts = [...state.contacts];
            contacts.push(action.data);
            return { ...state, contacts }
        }

        case DELETE_CONTACT:

            break;

        case FETCH_CONTACT:

            break;

        case FETCH_CONTACTS:

            break;
        default:
            return { ...state };
    }
}