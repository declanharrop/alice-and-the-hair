import React from 'react';
import CardSectionStyles from './CardSection.styles';
import RotatingCard from './RotatingCard';

export default function CardSection({ data }) {
  return (
    <CardSectionStyles>
      <div className="card-section-container">
        {data.map((item, i) => (
          <div key={i}>
            <RotatingCard data={item} />
          </div>
        ))}
      </div>
    </CardSectionStyles>
  );
}
