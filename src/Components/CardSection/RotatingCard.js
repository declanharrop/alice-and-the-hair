import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function RotatingCard({ data }) {
  const [isFlipped, setFlipped] = useState(false);
  const [format, setFormat] = useState('gif');

  return (
    <div className="rotating-card">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedFrontToBack="1"
        flipSpeedBackToFront="1"
      >
        <div
          className="card-front"
          onClick={() => setFlipped(!isFlipped)}
          onMouseEnter={() => setFormat('jpg')}
          onMouseLeave={() => setFormat('gif')}
        >
          <div className="clickme">
            <p>More Info</p>
          </div>
          <img src={`/img/team/${data.name}.${format}`} alt="" />
          <div className="overlay">
            <h5>{data.name}</h5>
            <p>{data.title}</p>
          </div>
        </div>
        <div className="card-back" onClick={() => setFlipped(!isFlipped)}>
          <div>
            <h4>{data.name}</h4>
            <h5>{data.title}</h5>
            <p>{data.titleDetails}</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
