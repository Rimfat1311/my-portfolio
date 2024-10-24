import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Card = ({ title }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // Infinite scrolling effect
    const animateCard = () => {
      gsap.to(card, {
        x: -400, // Move to the left (adjusted for new width)
        duration: 10, // Duration of the movement
        ease: "linear",
        onComplete: () => {
          gsap.set(card, { x: 400 }); // Reset position to the right
          animateCard(); // Call the function again for infinite loop
        },
      });
    };
    

    animateCard(); // Start the animation

    return () => {
      gsap.killTweensOf(card); // Clean up on unmount
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        width: '400px', 
        height: '100px',
        backgroundColor: '#172554',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        
        margin: '20px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      }}
    >
      {title}
    </div>
  );
};

export default Card;
