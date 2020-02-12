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
    console.log(this.state.reservationList);
    return (
      <div className="App">
        <Header />
        <Reservation reservationList={this.state.reservationList} />
      </div>
    );
  }
}

export default App;
