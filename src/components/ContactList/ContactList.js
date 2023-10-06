import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React from 'react';
import "./style.css"
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';

const ContactList =(props)=> {

  const dispatch = useDispatch();


   
  function displayObj(c) {
  
    return (
      <li key={nanoid()} className='contact'>
        {c.name}: {c.phone}
        <button onClick={()=>dispatch(remove(c.phone))}>delete</button>
      </li>
    );
  }
    const {contacts} = useSelector(state=>state.contacts);
    const {filter} = useSelector(state=>state.filter);
    let disp = contacts.filter(c=>c.name.toLowerCase().includes(filter)).map(c => displayObj(c));
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
