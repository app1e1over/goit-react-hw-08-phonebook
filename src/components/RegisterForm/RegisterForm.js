import React from 'react';
import { registerUser } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import "./style.css"
import { useNavigate } from 'react-router';

function RegisterForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [verify, setVerify] = useState({ q: '', a: 0 });
  const changeVerify = () => {
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 10);
    let act = Math.floor(Math.random() * 4);
    let qstr = '' + num1;
    let a = 0;
    switch (act) {
      case 0: {
        qstr += '/';
        a = num1 / num2;
        break;
      }
      case 1: {
        qstr += '+';
        a = num1 + num2;
        break;
      }
      case 2: {
        qstr += '-';
        a = num1 - num2;
        break;
      }
      default: {
        qstr += '*';
        a = num1 * num2;
        break;
      }

    }
    qstr += num2 + '=';
    setVerify({ q: qstr, a });
  };
  if (verify.q === '') {
    changeVerify();
  }

  const onSubmit = e => {
    e.preventDefault();
    let name = e.target['name'].value;
    let email = e.target['mail'].value;
    let password = e.target['password'].value;
    let passwordRep = e.target['repeat'].value;
    let dumb = e.target['dumb'].value;

    if ((Math.round(dumb) - verify.a) ** 2 > 1) {
      alert('Wrong, the answer was ' + verify.a);
      changeVerify();
      return;
    }
    if (password !== passwordRep) {
      alert('Passwords do not match');
      return;
    }
    if (password.trim().length < 7) {
      alert('Password must be at least 7 symbols long');
      return;
    }
    dispatch(registerUser({ email, password, name }));
    navigate('/me')
  };

  return (
    <form onSubmit={onSubmit} className='register-form'>
      <label>
        Username: <input name="name" type="text" />
      </label>
      <label>
        Email: <input name="mail" type="email" />
      </label>
      <label>
        Password: <input name="password" type="password" />
      </label>
      <label>
        Repeat password: <input name="repeat" type="password" />
      </label>
      <label>
        What is {verify.q} <input type="number" name="dumb" />
      </label>
      <button type="submit">Let me in!</button>
    </form>
  );
}

export default RegisterForm;
