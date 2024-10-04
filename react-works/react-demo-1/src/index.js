import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import ContactCard from './contacts-app/contacts-card';


import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {



    render() {
        const contact = {
            id: 101,
            name: "Peter",
            email: "peter@druker.com",
            phone: "7897897897",
            picture: "https://randomuser.me/api/portraits/men/1.jpg"
        };

        const contacts = [
            {
                "id": 1,
                "name": "Kym St. Aubyn",
                "email": "kst0@dot.gov",
                "gender": "Female",
                "phone": "7041134185",
                "picture": "https://randomuser.me/api/portraits/women/2.jpg"
            },
            {
                "id": 2,
                "name": "Sadie Kenworthey",
                "email": "skenworthey1@prlog.org",
                "gender": "Female",
                "phone": "3038282905",
                "picture": "https://randomuser.me/api/portraits/women/4.jpg"
            },
            {
                "id": 3,
                "name": "Delaney Trott",
                "email": "dtrott2@europa.eu",
                "gender": "Male",
                "phone": "3018023599",
                "picture": "https://randomuser.me/api/portraits/men/2.jpg"
            },
            {
                "id": 4,
                "name": "Marilin Cadany",
                "email": "mcadany3@trellian.com",
                "gender": "Female",
                "phone": "7897474064",
                "picture": "https://randomuser.me/api/portraits/women/3.jpg"
            },
            {
                "id": 5,
                "name": "Huey Tomaskunas",
                "email": "htomaskunas4@vistaprint.com",
                "gender": "Male",
                "phone": "8672454958",
                "picture": "https://randomuser.me/api/portraits/men/3.jpg"
            }
        ];

        // const contactCards = contacts.map(c => c.name);
        // console.log(contactCards);

        const contactCards = contacts.map(c => <ContactCard contact={c} key={c.id} />)

        return (
            <div>
                <ContactCard contact={contact} />
                {contactCards}
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);