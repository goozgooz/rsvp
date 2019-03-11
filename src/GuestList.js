import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = (props) => {
  let {isFiltered, guests, toggleConfirm, toggleEdit, editName} = props;
  
  if (isFiltered) {
    guests = guests.filter(guest => guest.isConfirmed);
  } 
  
  let guestList = guests.map((guest,i) => (
    <Guest 
      key={i} 
      guest={guest} 
      toggleConfirm={() => toggleConfirm(i)}
      toggleEdit={() => toggleEdit(i)}
      editName={(newName) => editName(i, newName)}
    />
  ));
  
  return (
    <ul>
      {guestList}
    </ul>
  );
};

GuestList.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  editName: PropTypes.func.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirm: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired
};
export default GuestList;