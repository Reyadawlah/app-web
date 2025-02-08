import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const ScrollButtonWrapper = styled.div`
  position: absolute;
  bottom: 120px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ScrollButtonContainer = styled.button`
  background: none;
  border: 2px solid #B4BCC8;
  border-radius: 25px;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #B4BCC8;
  font-family: 'DM Serif Text';
  font-size: 1.1rem;
  animation: ${bounce} 2s infinite;
  margin: 0 auto;

  &:hover {
    background: rgba(180, 188, 200, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #B4BCC8;
    margin-top: 2px;
  }
`;

const ButtonText = styled.span`
  letter-spacing: 0.05em;
`;

const ScrollButton = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollButtonWrapper>
      <ScrollButtonContainer onClick={scrollToProjects} aria-label="Scroll to projects">
        <ButtonText>View Our Projects</ButtonText>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </ScrollButtonContainer>
    </ScrollButtonWrapper>
  );
};

export default ScrollButton;