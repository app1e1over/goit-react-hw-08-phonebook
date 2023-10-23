import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { getUser } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { set } from 'redux/userSlice';

function Header(props) {
  const { user: obj } = useSelector(getUser);
  const { user } = obj;
  const dispatch = useDispatch();
  const savedJson = localStorage.getItem('user');
  if ((user === undefined || user.name === undefined) && savedJson!==null) {
    let saved = JSON.parse(savedJson);
    if (saved.user !== undefined) {
      dispatch(set(saved));
    }
  }
  if (user !== undefined && user.name !== undefined)
    return (
      <header>
        <NavLink to={'/'}>Contacts</NavLink>
        <NavLink to={'/me'}>Me</NavLink>
      </header>
    );
  else
    return (
      <header>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
        <NavLink to={'/me'}>Me</NavLink>
      </header>
    );
}

export default Header;
