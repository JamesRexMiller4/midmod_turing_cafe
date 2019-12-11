const Reservations = ({ data }) => {

  const reservations = data.map((reservation, index) => {
    <Card 
      key={index}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      guests={reservation.guests}
    />
  })
  return (
    <Card />
    );
}
 
export default Reservations;