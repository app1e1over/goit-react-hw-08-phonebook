import React, { useState } from 'react';
import Input from './Input/Input';
import Display from './Display/Display';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  function addToContacts(obj) {
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
  function removeFromContacts(obj) {
    let copy = [...contacts];
    copy = copy.filter(c => c.name !== obj.name && c.phone !== obj.phone);
    setContacts(copy);
  }
  return (
    <>
      <h2>PhoneBook</h2>
      <Input add={addToContacts}></Input>

      <h2>Contacts</h2>
      <Filter setFilter={setFilter}></Filter>
      <Display
        filter={filter}
        contacts={contacts}
        remove={removeFromContacts}
      ></Display>
    </>
  );
};
