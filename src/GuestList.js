import React from 'react';
import PropTypes from 'prop-types';

const GuestList = (props) => {
  let {guests} = props;

  let guestList = guests.map((guest,i) => (
    <li key={i}>
      <span>{guest.name}</span>
      <label>
        <input type="checkbox" checked={guest.isConfirmed}> Confirmed </input>
      </label>
      <button>edit</button>
      <button>remove</button>
    </li>
  ));
  
  return (
    <ul>
      {guestList}
    </ul>
  );
};

GuestList.propTypes = {
  guests: PropTypes.array.isRequired
};
export default GuestList;