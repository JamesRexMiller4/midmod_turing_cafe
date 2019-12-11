import React from 'react'
import Card from '../Card/Card';
import './Reservation.css'

const Reservations = ({ data }) => {
  
  const reservations = data.map(reservation => {
    return <Card 
      key={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
    />
  })
  return (
    <div className="reservations-wrapper-div">
      {reservations}
    </div>
    );
}
 
export default Reservations;