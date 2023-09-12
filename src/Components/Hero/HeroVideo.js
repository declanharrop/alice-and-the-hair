import React from 'react';
import Div100vh from 'react-div-100vh';
import Button from '../../Elements/Button';
import { HeroVideoStyles } from './HeroStyles';

export default function HeroVideo() {
  return (
    <Div100vh>
      {' '}
      <HeroVideoStyles>
        {' '}
        <div className="overlay">
          {' '}
          <div className="overlay-content">
            {' '}
            <img src="/AllLove.svg" alt="Alice and the Hair" />{' '}
            {/* <h1 style={{ marginBottom: '40px' }}>Alice and the Hair</h1> <Button exLink="https://go.aliceandthehair.co.uk/ColourConsultation" title="Colour Consultation" /> <Button exLink="https://go.aliceandthehair.co.uk/ClientFeedbackForm" title="Tell us how ya Feel" /> <Button exLink="https://go.aliceandthehair.co.uk/CoWorking" title="Co-Working Enquiries" /> <Button link="/book" title="Book Now" /> */}{' '}
          </div>{' '}
        </div>{' '}
        <div
          className="video"
          style={{ backgroundImage: 'url(/img/hero/home1.jpg)' }}
        >
          {' '}
          <video autoPlay loop muted playsInline>
            {' '}
            <source src="/video/backVideof.mp4" type="video/mp4" />{' '}
            <source src="/video/backVideoT.webm" type="video/webm" />{' '}
          </video>{' '}
        </div>{' '}
      </HeroVideoStyles>{' '}
    </Div100vh>
  );
}
