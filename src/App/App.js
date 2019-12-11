import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({data: data});
      })
  }


  createReservation = (query) => {
    console.log(query)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers : {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(query)
    })
      .then(res => res.json())
      .then(reservation =>  {
        console.log(reservation)
        this.setState({data: [...this.state.data, reservation]})
        return console.log(this.state.data)
      })
      //   let reservation = reservations[0]
      //   this.setState({data: [...this.state.data, reservation]})
      // })
      .catch((err)=>console.log(err))
  }
  

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form createReservation={this.createReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations data={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;
