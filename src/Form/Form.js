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


  handleChange = (e) => {
    if (e.target.id === "name") {
    this.setState({name: e.target.value})
    } else if (e.target.id === "date") {
      let dateArr = e.target.value.split('-').reverse();
      let date = dateArr.slice(0, 2).join('/')
      this.setState({date: date})
    } else if (e.target.id === "time") {
      this.setState({time: e.target.value})
    }else if (e.target.id === "number") {
      this.setState({number: e.target.value})
    } else {
      console.log(null)
    }
  }

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
        <input id="name"className="form-input" type='text' name="name" placeholder="Name" onChange={this.handleChange}></input>
        <input id="date" className="form-input" type='date' name="date" min="2019-12-11" onChange={this.handleChange} placeholder="Date(mm/dd)"></input>
        <input id="time" className="form-input" type='time' step="60" name="time" onChange={this.handleChange} placeholder="Time"></input>
        <input id="number" className="form-input" type='number' name="number" onChange={this.handleChange} placeholder="Number of Guests"></input>
        <button onclick="form-input" className='submit-btn'>Make Reservation</button>
        </div>
      </div>
      );
  }
}
 
export default Form;