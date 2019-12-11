import React from 'react'
import Card from '../Card/Card'

const Reservations = ({ data }) => {

  // const reservations = data.map((reservation, index) => {
  //   <Card 
  //     key={index}
  //     name={reservation.name}
  //     date={reservation.date}
  //     time={reservation.time}
  //     guests={reservation.guests}
  //   />
  // })
  return (
    <div>
      <Card />
    </div>
    );
}
 
export default Reservations;