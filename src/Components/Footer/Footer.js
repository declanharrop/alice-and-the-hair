import React from 'react';
import Reviews from '../Reviews/Reviews';
import FooterStyles from './Footer.styles';

export default function Footer() {
  return (
    <FooterStyles>
      <Reviews />
      <div className="opening-times">
        <h3>Opening Times</h3>
        <p>MONDAY | CLOSED</p>
        <p>TUESDAY | 9:00AM - 5:00PM</p>
        <p>WEDNESDAY | 9:00AM - 8:00PM</p>
        <p>THURSDAY | 9:00AM - 6:00PM</p>
        <p>FRIDAY | 9:00AM - 7:00PM</p>
        <p>SATURDAY | 8:00AM - 4:00PM</p>
        <p>SUNDAY | CLOSED</p>
      </div>
      <div className="lower-section">
        <p>
          © {new Date().getFullYear()} Alice and the Hair. Use of this site
          constitutes acceptance of our Privacy Policy. The material on this
          site may not be reproduced, distributed, transmitted, cached or
          otherwise used, except with prior written permission of Alice and the
          Hair.
        </p>
      </div>
    </FooterStyles>
  );
}
