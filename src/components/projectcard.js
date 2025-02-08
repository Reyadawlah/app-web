import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: rgba(180, 188, 200, 0.05);
  border-radius: 12px;
  padding: 24px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(180, 188, 200, 0.1);

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'DM Serif Display';
  font-size: 1.8rem;
  color: #B4BCC8;
  margin-bottom: 16px;
`;

const ProjectDescription = styled.p`
  font-family: 'DM Serif Text';
  font-size: 1rem;
  color: #B4BCC8;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const TechTag = styled.span`
  background: rgba(180, 188, 200, 0.1);
  padding: 4px 12px;
  border-radius: 16px;
  font-family: 'DM Serif Text';
  font-size: 0.9rem;
  color: #B4BCC8;
`;

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <CardContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <TechStack>
        {technologies.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </TechStack>
    </CardContainer>
  );
};

export default ProjectCard;