import React from 'react';
import mapPointer from '../images/pointer.png';

export default function Cards(props) {
  return (
    <div className="cards">
      <img src={props.img} alt="" className="img" />
      <div className="info">
        <img src={mapPointer} alt="" className="pointer" />
        <span className="location">{props.location}</span>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer">
          <span className="map">{props.map}</span>
        </a>
        <p className="title">{props.title}</p>
        <p className="date">{props.date}</p>
        <p className="price">
          <span className="description">{props.description}</span>
        </p>
      </div>
    </div>
  );
}
