import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      number: ''
    };
  }

  makeReservation = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <header>
        <h1>Turing Cafe Reservations</h1>
        <form>
          <input
            placeholder="Name..."
            type="text"
            name="name"
            onChange={this.handleChange}
          ></input>
          <input
            placeholder="Date (MM/DD)"
            type="text"
            name="date"
            onChange={this.handleChange}
          ></input>
          <input
            placeholder="Time"
            type="text"
            name="time"
            onChange={this.handleChange}
          ></input>
          <input
            placeholder="Number of guests"
            type="text"
            name="number"
            onChange={this.handleChange}
          ></input>
          <button onClick={this.makeReservation} className="reservation-button">
            Make Reservation
          </button>
        </form>
      </header>
    );
  }
}

export default Header;
