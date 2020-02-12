import React, { Component } from 'react';
import './Reservation.css';

const Reservation = ({ reservationList }) => {
  const allReservations = reservationList.map(reservation => {
    return (
      <section className="reservation-card">
        <h3>{reservation.name}</h3>
        <p>{reservation.date}</p>
        <p>{reservation.time}</p>
        <p>{reservation.number}</p>
        <button className="cancel-button">Cancel</button>
      </section>
    );
  });
  return <section className="reservation-section">{allReservations}</section>;
};

export default Reservation;
