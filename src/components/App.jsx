import React, { Component } from 'react';
import ContactForm  from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contacts:[],
      filter:""
    }
  }
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  addToContacts=(obj)=> {
    let {contacts} = this.state;
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
    this.setState({contacts:copy});
  }
  removeFromContacts=(obj) =>{
    let copy = [...this.state.contacts];
    copy = copy.filter(c => c.name !== obj.name && c.phone !== obj.phone);
    this.setState({contacts:copy});
  }
  isOkayObj(obj) {
    const {filter}= this.state;
    return obj.name.toLowerCase().includes(filter.toLowerCase());
  }
  setFilter=(val)=>{
    this.setState({filter:val})
  }
  render(){
    let filtered = this.state.contacts.filter(o=>this.isOkayObj(o));
    return (
      <>
        <h2>PhoneBook</h2>
        <ContactForm add={this.addToContacts}/>
  
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter}/>
        <ContactList 
          contacts={filtered}
          remove={this.removeFromContacts}
        />
      </>
    );
  }

};
