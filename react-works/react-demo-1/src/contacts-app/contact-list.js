import React from 'react';
import ContactCard from './contacts-card';

const ContactList = ({ contacts }) => (
    <div>
        {
            contacts.map(c => <ContactCard contact={c} key={c.id} />)
        }
    </div>
);

export default ContactList;