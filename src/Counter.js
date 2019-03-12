import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({guests}) => {
  let total = guests.length;
  let confirmed = guests.reduce((total,guest) => guest.isConfirmed ? total += 1 : total, 0);
  
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{confirmed}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{total - confirmed}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  )
}

Counter.propTypes = {
  guests: PropTypes.array.isRequired
}

export default Counter;