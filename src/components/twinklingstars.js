import React from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Star = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: #ffffff;
  border-radius: 50%;
  opacity: 0;
  animation: ${twinkle} ${props => props.duration}s infinite;
  animation-delay: ${props => props.delay}s;
`;

const TwinklingStars = () => {
  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 3
  }));

  return (
    <StarContainer>
      {stars.map(star => (
        <Star
          key={star.id}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`
          }}
          size={star.size}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
    </StarContainer>
  );
};

export default TwinklingStars;