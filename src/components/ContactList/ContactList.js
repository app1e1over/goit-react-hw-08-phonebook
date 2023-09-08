import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class ContactList extends Component {

   isOkayObj(obj) {
    // for (const key in filter) {
    //     let val = ""+obj[key];
    //     let filt =""+filter[key];
    //     if(val==undefined || !val.includes(filt)){
    //         return false;
    //     }
    // }
    const {filter}= this.props;
    return obj.name.toLowerCase().includes(filter.toLowerCase());
  }

   
  displayObj(c) {
    const {remove} = this.props;
    return (
      <li key={nanoid()}>
        {c.name}: {c.phone}
        <button onClick={()=>remove(c)}>delete</button>
      </li>
    );
  }
  render() {
    const {contacts} = this.props;
    let disp = contacts.filter(e => this.isOkayObj(e)).map(c => this.displayObj(c));
    return (
      <>
        <ul>{disp}</ul>
      </>
    );
  }
}


ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  remove:PropTypes.func
};


export default ContactList;
