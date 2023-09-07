import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

Display.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  remove:PropTypes.func
};

function Display({ contacts, filter,  remove }) {
  function isOkayObj(obj) {
    // for (const key in filter) {
    //     let val = ""+obj[key];
    //     let filt =""+filter[key];
    //     if(val==undefined || !val.includes(filt)){
    //         return false;
    //     }
    // }
    return obj.name.toLowerCase().includes(filter.toLowerCase());
  }
  function displayObj(c) {
    return (
      <li key={nanoid()}>
        {c.name}: {c.phone}
        <button onClick={()=>remove(c)}>delete</button>
      </li>
    );
  }
  let disp = contacts.filter(e => isOkayObj(e)).map(c => displayObj(c));
  return (
    <>

      <ul>{disp}</ul>
    </>
  );
}

export default Display;
