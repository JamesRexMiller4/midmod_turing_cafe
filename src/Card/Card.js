const Card = ({ name, date, time, guests}) => {
  return ( 
    <div>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>Number of Guests: {guests}</h3>
    </div>
   );
}
 
export default Card;