import React from 'react'
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ name, date, time, number}) => {
  return ( 
    <div className="card-wrapper-div">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>Number of Guests: {number}</h3>
      <button className="cancel btn">Cancel</button>
    </div>
   );
}
 
export default Card;


Card.propTypes = {
  id: PropTypes.number,
  name:PropTypes.string,
  date:PropTypes.string,
  time:PropTypes.string,
  number:PropTypes.number
}