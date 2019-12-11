import React from 'react'
import PropTypes from 'prop-types';


const Card = ({ name, date, time, guests}) => {
  return ( 
    <div>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>Number of Guests: {guests}</h3>
      <button className="cancel btn">Cancel</button>
    </div>
   );
}
 
export default Card;


Card.propTypes = {

  name:PropTypes.string,
  date:PropTypes.number,
  time:PropTypes.number,
  guests:PropTypes.number

}