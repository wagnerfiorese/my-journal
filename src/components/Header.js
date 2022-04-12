import React from 'react';
import worldIcon from '../images/world.png';

export default function Header() {
  return (
    <div className="header">
      <img src={worldIcon} alt="" className="world" />
      <p className="text">my travel journal.</p>
    </div>
  );
}
