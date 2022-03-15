import React from 'react';
import { HeroVideoStyles } from './HeroStyles';

export default function HeroVideo() {
  return (
    <HeroVideoStyles>
      <div className="overlay">
        <h1>Alice and the Hair</h1>
      </div>
      <div
        className="video"
        style={{ backgroundImage: 'url(/img/hero/home1.jpg)' }}
      >
        <video autoPlay loop muted playsInline>
          <source src="/video/backVideoT.webm" type="video/webm" />
          <source src="/video/backVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </HeroVideoStyles>
  );
}
