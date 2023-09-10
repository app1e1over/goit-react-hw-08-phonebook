import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import "./style.css"

class ContactList extends Component {



   
  displayObj(c) {
    const {remove} = this.props;
    return (
      <li key={nanoid()} className='contact'>
        {c.name}: {c.phone}
        <button onClick={()=>remove(c)}>delete</button>
      </li>
    );
  }
  render() {
    const {contacts} = this.props;
    let disp = contacts.map(c => this.displayObj(c));
    return (
      <>
        <ul className='contact-list'>{disp}</ul>
      </>
    );
  }
}


ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  remove:PropTypes.func
};


export default ContactList;
