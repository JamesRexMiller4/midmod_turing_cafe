import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null,
      className: 'hidden'
     }
  }


  handleChange = (e) => {
    if (e.target.id === "name") {
    this.setState({name: e.target.value});
    } else if (e.target.id === "date") {
      let dateArr = e.target.value.split('-').reverse();
      let date = dateArr.slice(0, 2).join('/');
      this.setState({date: date})
    } else if (e.target.id === "time") {
      let time;
      console.log(typeof e.target.value);
      let timeArr = e.target.value.split(':');
      if (parseInt(timeArr[0]) > 12) {
        let hour = (parseInt(e.target.value) - 12);
        timeArr[0] = hour.toString();
        time = timeArr.join(':');
        this.setState({time: time});
      } else {
        time = e.target.value;
        this.setState({time: time})
      }
    } else if (e.target.id === "number") {
      console.log(e.target.value)
      this.setState({number: e.target.value})
    } else {
      console.log(null)
    }
  }

  submitReservation = (e) => {
    e.preventDefault();
    console.log('working')
    if (this.state.name.length > 0 && this.state.date.length > 0 
      && this.state.time.length > 0 && this.state.number > 0) {
        let query = {name: this.state.name, date: this.state.date, time: this.state.time, number: this.state.number}
        this.props.createReservation(query);
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
        <input id="time" className="form-input" type='time' name="time" onChange={this.handleChange} placeholder="Time"></input>
        <input id="number" className="form-input" type='number' name="number" onChange={this.handleChange} placeholder="Number of Guests"></input>
        <button onClick={this.submitReservation} className='submit-btn'>Make Reservation</button>
        </div>
      </div>
      );
  }
}
 
export default Form;