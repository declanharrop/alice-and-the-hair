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
          {data.clicker && <div className="ping" />}
          <img src={`/img/team/${data.name}.${format}`} alt="" />
          {data.maternity && (
            <div className="maternity">
              <p>
                <span>🤱 </span> Maternity Leave
              </p>
            </div>
          )}
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
            {data.prices && <p>{data.prices}</p>}
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
