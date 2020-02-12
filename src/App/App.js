import React, { Component } from 'react';
import './App.css';
import Reservation from '../Reservation/Reservation';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservationList: []
    };
  }

  makeReservation = newReservation => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newReservation),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response => response.json())
      .then(data =>
        this.setState({ reservationList: [...this.state.reservationList] })
      )
      .catch(error => console.log(error));
  };

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data =>
        this.setState({
          reservationList: data
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header makeReservation={this.makeReservation} />
        <Reservation reservationList={this.state.reservationList} />
      </div>
    );
  }
}

export default App;
