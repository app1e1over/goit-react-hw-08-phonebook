import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React from 'react';
import "./style.css"

const ContactList =(props)=> {



   
  function displayObj(c) {
    const {remove} = props;
    return (
      <li key={nanoid()} className='contact'>
        {c.name}: {c.phone}
        <button onClick={()=>remove(c)}>delete</button>
      </li>
    );
  }
    const {contacts} = props;
    let disp = contacts.map(c => displayObj(c));
    return (
      <>
        <ul className='contact-list'>{disp}</ul>
      </>
    );
  }



ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  remove:PropTypes.func
};


export default ContactList;
