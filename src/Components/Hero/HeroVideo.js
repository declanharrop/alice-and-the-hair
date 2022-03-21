import React from 'react';
import Div100vh from 'react-div-100vh';
import Button from '../../Elements/Button';
import { HeroVideoStyles } from './HeroStyles';

export default function HeroVideo() {
  return (
    <Div100vh>
      <HeroVideoStyles>
        <div className="overlay">
          <div className="overlay-content">
            <h1 style={{ marginBottom: '40px' }}>Alice and the Hair</h1>
            <Button exLink="/" title="Colour Consultaion" />
            <Button exLink="/" title="Tell us how ya Feel" />
          </div>
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
    </Div100vh>
  );
}
