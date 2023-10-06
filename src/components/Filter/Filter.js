import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { set } from 'redux/filterSlice';

const Filter =(props)=> {

  const dispatch = useDispatch();
    
    return (
      <div>
        <label>
          Find contacts by name<br></br>
          <input onInput={e => dispatch(set(e.target.value.toLowerCase()))}></input>
        </label>
      </div>
    );
  
}


Filter.propTypes = {
    setFilter: PropTypes.func,
};


export default Filter;
