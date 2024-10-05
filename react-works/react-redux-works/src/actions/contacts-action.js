import { FETCH_CONTACTS } from "../types/constants";

const url = "http://localhost:4000/contact";



// the dispatch argument will be injected by redux, and traps etween every action 
export const fetchContacts = () => async (dispatch) => {

    let resp = await fetch(url);
    let contacts = await resp.json();
    let action = { type: FETCH_CONTACTS, data: contacts }
    dispatch(action)
}



export const addContact = (contact) => async (dispatch) => {
    let resp = await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': "application/json"
            }
        });

    let newContact = await resp.json();
    dispatch({ type: ADD_CONTACT, data: newContact });
}


export const deleteContact = (id) => async (dispatch) => {
    await fetch(url + id, { method: 'DELETE' });
    dispatch({ type: DELETE_CONTACT, data: id });
}