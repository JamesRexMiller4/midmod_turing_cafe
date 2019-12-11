import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      date: '',
      time: '',
      number: null,
      className: 'hidden'
     }
  }


  // handleChange = e => {
  // e.target.name === "name" ? 
  // this.setState({name: e.target.value})
  // : e.target.name === "date" ? 
  // this.setState({date: e.target.value})
  // : e.target.name === "time" ? 
  // this.setState({time: e.target.value})
  // : e.target.name === "number" ?
  // this.setState({number: e.target.value})
  // : null 
  // }

  submitReservation = (e) => {
    e.preventDefault();
    if (this.state.name.length > 0 && this.state.date.length > 0 
      && this.state.time.length > 0 && this.state.number > 0) {
        // updateReservations();
      } else {
        this.setState({className: 'error'})
      }

  }

  trimDate = () => {

  }
  render() { 
    return (
      <div className='form-wrapper-div'>
        <h2 className={this.state.className}>Please fill out all inputs to submit reservation</h2>
        <div className='input-wrapper-div'>
        <input className="form-input" type='text' name="name" placeholder="Name"></input>
        <input className="form-input" type='date' name="date" min="2019-12-11" placeholder="Date(mm/dd)"></input>
        <input className="form-input" type='text' name="time" placeholder="Time"></input>
        <input className="form-input" type='number' name="number" placeholder="Number of Guests"></input>
        <button onclick="form-input" className='submit-btn'>Make Reservation</button>
        </div>
      </div>
      );
  }
}
 
export default Form;