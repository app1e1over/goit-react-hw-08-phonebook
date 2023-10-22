import React from 'react';
import { useDispatch } from 'react-redux';
import { changeContact, removeContact } from 'redux/operations';
import { useState } from 'react';
import './style.css';

function Contact({ id, name, number, token }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const patch = e => {
    e.preventDefault();
    setEditing(false);

    dispatch(
      changeContact({
        name: e.target['name'].value,
        number: e.target['number'].value,
        id,
        token,
      })
    );
  };

  if (!editing)
    return (
      <li className="contact" onClick={() => setEditing(true)}>
        {name}:{' '}
        <span
          onClick={() => {
            navigator.clipboard.writeText(number);
            alert(name + "'s number has been copied to your clipboard");
          }}
        >
          {number}
        </span>
        <button
          onClick={() => dispatch(removeContact({ id: id, token: token }))}
        >
          delete
        </button>
      </li>
    );
  else
    return (
      <li className="contact">
        <form onSubmit={patch}>
          <label>
            Name:
            <input defaultValue={name} name="name" />
          </label>

          <label>
            Phone:
            <input defaultValue={number} name="number" />
          </label>
          <div>
            <button onClick={() => setEditing(false)}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </li>
    );
}

export default Contact;
