import React, {useState} from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    setName: PropTypes.func,
    setPhone: PropTypes.func,
    add: PropTypes.func,
};

function Input({ add }) {
    const [name, setName]= useState("");
    const [phone, setPhone]= useState("");


    function makeObj() {
      //very useful
        return {name, phone};
      }
  return (
    <div>
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
        onChange={e => {
            setPhone(e.target.value);
        }}
        value={phone}
      />
      <br></br>

      <button onClick={()=>{add(makeObj())}}>Add</button>

    </div>
  );
}

export default Input;
