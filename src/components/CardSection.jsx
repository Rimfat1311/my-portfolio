import React from 'react';
import Card from './Card';

const CardsSection = () => {
  const cardTitles = ["Testimonial 1", "Testimonial 2", "Testimonial 3", "Testimonial 4"];

  // Duplicate the cards for continuous scrolling effect
  const fullCardTitles = [...cardTitles, ...cardTitles]; 

  return (
    <div
      style={{
        display: 'flex',
        overflow: 'hidden',
        // position: 'relative',
        width: '100%',
        whiteSpace: 'nowrap', // Prevent wrapping
      }}
    >
      {fullCardTitles.map((title, index) => (
        <Card key={index} title={title} />
      ))}
    </div>
  );
};

export default CardsSection;
