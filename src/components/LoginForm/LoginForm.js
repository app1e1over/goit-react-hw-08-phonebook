import React from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';
import { useNavigate } from 'react-router';

function LoginForm(props) {
  const navigate = useNavigate();



  let dispatch = useDispatch();
  const submit = e => {
    e.preventDefault();
    let email = e.target['mail'].value;
    let password = e.target['password'].value;
    dispatch(loginUser({email, password}));
    navigate("/me")
  };
  return (
    <form onSubmit={submit}>
      <div>
        <label>
          Email: <input name="mail" type="email" />
        </label>
      </div>
      <div>
      <label>
        Password: <input name="password" type="password" />
      </label>
      </div>
      <button type="submit">I am back!</button>
    </form>
  );
}

export default LoginForm;
