import React from 'react';
import PropTypes from 'prop-types';

const GuestName = (props) => {
  let {isEditing, name, editName} = props;
  return isEditing ?
    <input 
      onChange={editName}
      type='text' 
      value={name} />
    :
    <span> {name} </span>
}

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired
}

export default GuestName;