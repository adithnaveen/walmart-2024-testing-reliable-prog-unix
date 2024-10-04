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

        return (
            <ContactCard contact={contact} />
        );
    }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);