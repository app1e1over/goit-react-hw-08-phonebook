import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"
import { getUser } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/operations';
import Loader from 'components/Loader/Loader';

function UserMenu(props) {
  const dispatch = useDispatch();
  const { user:obj, isLoading, error } = useSelector(getUser);
  const {user, token}=obj;
  const out = ()=>{
    dispatch(logoutUser(token));
  }
  if(isLoading){
    return <Loader/>
  }
  if(error || user === undefined){
    return <div className='user-container'>There seems to be an <span className='name-container'>error</span> please <NavLink to={"/login"}>Log in</NavLink> again</div>
  }
  return (
    <div className='user-container'>
      <p className='name-container'>{user.name ?? "You are logged out"}</p>
      {user.name ? <button onClick={out}>Logout</button> : <div><NavLink to={"/login"}>Log in</NavLink> or <NavLink to={"/register"}>Sign up</NavLink> to begin using website</div>}
    </div>
  );
}

export default UserMenu;
