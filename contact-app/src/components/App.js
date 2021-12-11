import React,  {useState, useEffect } from "react"; //React hooks import satement
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from 'uuidv4';
import api from "../api/contacts";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
const [contacts, setContacts] = useState([]); 

const retrieveContacts  = async () =>{
  const response = await api.get("/contacts");
  return response.data;
};

const addContactHandler = async (contact) => {
   const request = {
     id: uuid(), 
     ...contact,};
   const response = await api.post("/contacts", request);
   setContacts([...contacts, response.data]);
};

const remveContactHandler = async (id) => {
  
await api.delete('/contacts/${id}');
  const newContactList = contacts.filter((contact)=>{
    return contact.id !== id;
  });
  setContacts(newContactList);
};

useEffect(()=>{        
// const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
// if(retriveContacts)setContacts(retriveContacts);
const getAllContacts = async () =>{
  const allContacts = await retrieveContacts();
  if(allContacts) setContacts(allContacts); 
};
getAllContacts();
},[]);    //react hook useEffect helps to fetching data from api  we can also fetch from localhost


useEffect(()=>{        
  // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
},[contacts]);    //react hook useEffect helps to store data locally

  return (
    <div className="ui container"> 
    <Router>
      <Header/>
        <Switch>
           <Route path="/" 
              exact
              render = {(props)=>(
              <ContactList 
                {...props} 
                contacts={contacts} 
                getContactId={remveContactHandler} 
              />
           )}
           />
           <Route path="/add"
              render = {(props)=>(
                <AddContact 
                  {...props} 
                  addContactHandler={addContactHandler} />
                  )}
             />  
            <Route path="/contact/:id" component={ContactDetails}  />     
      </Switch>
    </Router> 
    </div>
  ); //here we are going to add react routers to each components
};
export default App;
