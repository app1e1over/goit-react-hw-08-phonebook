import React, { useEffect, useState, useRef } from 'react';
import ContactForm  from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export const App =()=> {
  const [contacts, setContacts] = useState(readLS());
  const [filter, setFilter]=useState("");
  const prevContacts = useRef(readLS());
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const addToContacts=(obj)=> {
    let existing = contacts.filter(c => c.phone === obj.phone)[0];
    if (existing !== undefined) {
      alert(
        'this number is already in your phonebook by the name ' + existing.name
      );
      //I find it dumb, that phonebook can`t have same names
      return;
    }
    let copy = [...contacts];
    copy.push(obj);
    setContacts(copy);
  }
  const removeFromContacts=(obj) =>{
    let copy = [...contacts];
    copy = copy.filter(c => c.phone !== obj.phone);
    setContacts(copy);
  }
  function isOkayObj(obj) {
    return obj.name.toLowerCase().includes(filter.toLowerCase());
  }
  function writeToLS(){
    console.log("writing");
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
  function readLS(){
    let res=JSON.parse(localStorage.getItem("contacts"));
    if(res===null){
      res=[];
    }
    return res;
  }

  useEffect(()=>{
    if(prevContacts.current!==contacts){
      writeToLS();
      prevContacts.current=contacts;
    }

  })

    let filtered =contacts.filter(o=>isOkayObj(o));
    return (
      <>
        <h2>PhoneBook</h2>
        <ContactForm add={addToContacts}/>
  
        <h2>Contacts</h2>
        <Filter setFilter={setFilter}/>
        <ContactList 
          contacts={filtered}
          remove={removeFromContacts}
        />
      </>
    );
  

};
