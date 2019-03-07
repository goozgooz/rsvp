import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = (props) => {
  let {guests} = props;

  let guestList = guests.map((guest,i) => (
    <Guest key={i} guest={guest} />
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