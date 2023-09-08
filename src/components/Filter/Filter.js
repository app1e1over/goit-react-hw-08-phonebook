import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {

  render() {
    const {setFilter} = this.props;
    return (
      <div>
        <label>
          Find contacts by name<br></br>
          <input onInput={e => setFilter(e.target.value)}></input>
        </label>
      </div>
    );
  }
}


Filter.propTypes = {
    setFilter: PropTypes.func,
};


export default Filter;
