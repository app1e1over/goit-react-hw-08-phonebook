import PropTypes from 'prop-types';
import React, {useState} from 'react';
import "./style.css";

const ContactForm = (props)=> {
  const [name, setName] = useState("");
  const [phone, setPhone]=useState("");

  function makeObj() {
    
      return {name, phone};
    }
 
    return (
      <form className='form-number' onSubmit={(e)=>{e.preventDefault(); props.add(makeObj()); setName(""); setPhone("");}}>
        <input

          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onInput={e => {
            setName(e.target.value)
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
            setPhone(e.target.value)
          }}
          value={phone}
        />
        <br></br>
  
        <button type='submit'>Add</button>
  
      </form>
    );
  }



ContactForm.propTypes = {
    setName: PropTypes.func,
    setPhone: PropTypes.func,
    add: PropTypes.func,
};

export default ContactForm ;
