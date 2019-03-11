import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = (props) => {
  let {guest, toggleConfirm, toggleEdit, editName, index} = props;
  return (
    <li>
      <GuestName 
        isEditing={guest.isEditing} 
        name={guest.name} 
        editName={(e) => editName(e.target.value)}
      /> 
      <label>
        <input 
          type="checkbox" 
          checked={guest.isConfirmed} 
          onChange={toggleConfirm} 
        /> 
          Confirmed
      </label>
      
      <button onClick={toggleEdit}> {guest.isEditing ? 'save' : 'edit'}</button>
      <button>remove</button>
    </li>
  )
}


Guest.propTypes = {
  guest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired
  }),
  toggleConfirm: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  editName: PropTypes.func.isRequired,
};
export default Guest ;