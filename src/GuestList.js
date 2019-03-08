import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = (props) => {
  let {guests, toggleConfirm} = props;

  let guestList = guests.map((guest,i) => (
    <Guest key={i} index={i} guest={guest} toggleConfirm={toggleConfirm} />
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