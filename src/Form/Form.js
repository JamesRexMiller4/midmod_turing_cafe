import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }


  submitReservation() {

  }
  render() { 
    return (
      <div className='form-wrapper-div'>
        <h1>I AM A FORM</h1>
        <input className="form-input" type='text' name="name" placeholder="Name"></input>
        <input className="form-input" type='date' name="date" placeholder="Date(mm/dd)"></input>
        <input className="form-input" type='text' name="time" placeholder="Time"></input>
        <input className="form-input" type='number' name="guests" placeholder="Number of Guests"></input>
        <button onclick="form-input" className='submit btn'>Make Reservation</button>
      </div>
      );
  }
}
 
export default Form;