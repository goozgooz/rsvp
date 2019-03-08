import React from 'react';
import PropTypes from 'prop-types';

const Guest = (props) => {
  let {guest, toggleConfirm, index} = props;
  return (
    <li>
      <span>{guest.name}</span>
      <label>
        <input 
          type="checkbox" 
          checked={guest.isConfirmed} 
          onChange={toggleConfirm} 
        /> 
          Confirmed
      </label>
      
      <button>edit</button>
      <button>remove</button>
    </li>
  )
}


Guest.propTypes = {
  guest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired
  }),
  toggleConfirm: PropTypes.func.isRequired
};
export default Guest ;