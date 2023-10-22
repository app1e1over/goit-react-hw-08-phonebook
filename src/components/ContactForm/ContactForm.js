import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { addContact } from 'redux/operations';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const {contacts} = useSelector(state=>state.contacts);
  const { user:obj} = useSelector(getUser);
  function submit(e) {
    e.preventDefault();
    //props.add(makeObj());
    let existing = contacts.filter(s=>s.phone===phone)[0];
    if(existing!==undefined){
      alert("That number is already saved as "+existing.name);
    }else{
      dispatch(addContact({name, number:phone, token:obj.token}))

    }

     setName('');
     setPhone('');
  }
  if(obj.token===undefined){
    return <div className='user-container'>Please <NavLink to={"/login"}>Log in</NavLink> firts</div>

  }

  return (
    <form className="form-number" onSubmit={submit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onInput={e => {
          setName(e.target.value);
        }}
        value={name}
      />
      <br></br>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onInput={e => {
          setPhone(e.target.value);
        }}
        value={phone}
      />
      <br></br>

      <button type="submit">Add</button>
    </form>
  );
};

ContactForm.propTypes = {
  setName: PropTypes.func,
  setPhone: PropTypes.func,
  add: PropTypes.func,
};

export default ContactForm;
