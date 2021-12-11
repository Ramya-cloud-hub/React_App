import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{
console.log(props);
const deleteContactHandler = (id)=> {
    props.getContactId(id);
};

const  renderContactList = props.contacts.map((contact) =>{

    return (
            <ContactCard
             contact={contact} 
             clickHandler={deleteContactHandler} 
             key= {contact.id}
             />  //this code to delete contact from list and to see list to its deleted or not
    );
});
    return(
      <div className="main">
        <h2>Contact List
          <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
          </Link>
        </h2>
        <div className="ui celled list">{renderContactList}</div>  
     </div>  
    );
};
export default ContactList;