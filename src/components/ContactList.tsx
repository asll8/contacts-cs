import React from "react";
import { useState, useEffect } from "react";
import { Contacts, fetchContacts } from "../data/contacts";
import "./ContactList.css"
import Popover from "./Popover";


const ContactList: React.FC = () => {

    const [contacts, setContacts] = useState<Contacts[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedContact, setSelectedContact] = useState<Contacts | null>(null);

    useEffect(() => {
        setLoading(true);
        fetchContacts()
        .then((data) => {
            setContacts(data);
            setLoading(false);
        })
        .catch((error) => {
            setError((error as Error).message);
            setLoading(false);
        })
    }, []);

    if (loading) return <div>Loading...</div>

    if (error) return <p className="error-message">{error}</p>

    return(
        <div className="list-container">
            <h1>Contact List Case Study</h1>
            <ul className="contact-list">
                {contacts.map((contact) => (
                    <li 
                        key={contact.name} 
                        className="contact-item"
                        onClick={() => setSelectedContact(contact)}
                    >
                        {contact.name}
                    </li>
                ))}
            </ul>
            {selectedContact && (
                <Popover contacts={selectedContact} onClose={() => setSelectedContact(null)} />
            )
            }
        </div>
    )
}

export default ContactList;