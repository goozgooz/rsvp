import React from 'react';
import PropTypes from 'prop-types';

const Guest = ({guest}) => {
  console.log(guest)
  return (
    <li>
      <span>{guest.name}</span>
      <label>
        <input type="checkbox" checked={guest.isConfirmed} /> Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
    </li>
  )
}


Guest.propTypes = {
  guest: PropTypes.object.isRequired
};
export default Guest ;