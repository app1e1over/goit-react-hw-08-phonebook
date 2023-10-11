import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, removeContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

const ContactList = props => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(()=>{
    console.log(contacts);

  }, [contacts])
  function displayObj(c) {
    return (
      <li key={nanoid()} className="contact">
        {c.name}: {c.phone}
        <button onClick={() => dispatch(removeContact(c.id))}>delete</button>
      </li>
    );
  }
  const { filter } = useSelector(state => state.filter);
  let disp = contacts
    .filter(c => c.name.toLowerCase().includes(filter))
    .map(c => displayObj(c));
  return (
    <>
      {isLoading && <p>loadingg...</p>}
      {error && <h1>Well... bad</h1>}
      {contacts.length>0 && <ul className="contact-list">{disp}</ul>}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  remove: PropTypes.func,
};

export default ContactList;
