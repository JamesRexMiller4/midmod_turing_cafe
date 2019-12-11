import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => console.log(data))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations />
        </div>
      </div>
    )
  }
}

export default App;
