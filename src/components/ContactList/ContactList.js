import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts, getUser } from 'redux/selectors';
import Contact from 'components/Contact/Contact';

const ContactList = props => {
  const dispatch = useDispatch();

  const { user: obj } = useSelector(getUser);
  const { contacts, isLoading, error } = useSelector(getContacts);


  useEffect(() => {
    dispatch(fetchContacts(obj.token));
  }, [dispatch, obj.token]);

  function displayObj(c) {
    return (
      <Contact
        key={nanoid()}
        token={obj.token}
        name={c.name}
        number={c.number}
        id={c.id}
      ></Contact>
    );
  }
  const { filter } = useSelector(state => state.filter);
  let disp = contacts
    .filter(c => c.name.toLowerCase().includes(filter))
    .map(c => displayObj(c));
  if (obj.token === undefined) {
    return <></>;
  }
  return (
    <>
      {isLoading && <p>loadingg...</p>}
      {error && <h1>Well... bad</h1>}
      {contacts.length > 0 && <ul className="contact-list">{disp}</ul>}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  remove: PropTypes.func,
};

export default ContactList;
