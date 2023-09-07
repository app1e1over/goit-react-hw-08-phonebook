import React from 'react';
import PropTypes from 'prop-types';

Filter.propTypes = {
    setFilter: PropTypes.func,
};

function Filter({setFilter}) {
  return (
    <div>
      <label>
        Find contacts by name<br></br>
        <input onInput={e => setFilter(e.target.value)}></input>
      </label>
    </div>
  );
}

export default Filter;
