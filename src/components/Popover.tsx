import React from "react";
import { CommercialData, Contacts, PersonalData } from "../data/contacts";
import "./Popover.css";

interface PopoverProps {
    contacts: Contacts;
    onClose: () => void;
}

const Popover: React.FC<PopoverProps> = ({ contacts, onClose}) => {
    const {name, contact_type, created_at, data} = contacts;

    return(
        <div className="popover-overlay" onClick={onClose}>
            <div className="popover-content" onClick={(e) => e.stopPropagation()}>
                <h2>{name}</h2>
                <p>Type: {contact_type}</p>
                <p>Created At: {new Date(created_at).toLocaleString()}</p>
                {contacts.contact_type === "PERSONAL" ? 
                (
                    <PersonalInfo data={data as PersonalData} />
                ) : (
                    <CommercialInfo data={data as CommercialData} />
                )}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

const PersonalInfo = ({data} : {data: PersonalData }) => {
    return (
        <div>
            <p>Home Address: {(data as PersonalData).home_address}</p>
            <p>Postal Code: {(data as PersonalData).postal_code}</p>
            <p>Phone number: {(data as PersonalData).phone_number}</p>
        </div>
    )
}

const CommercialInfo = ({data} : {data: CommercialData }) => {
    return (
        <div>
            <p>Company Address: {(data as CommercialData).company_address}</p>
            <p>Postal Code: {(data as CommercialData).postal_code}</p>
            <p>Vat: {(data as CommercialData).vat}</p>
            <p>Website: {(data as CommercialData).website}</p>
        </div>
    )
}

export default Popover;