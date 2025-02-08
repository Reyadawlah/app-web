import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TwinklingStars from '../components/twinklingstars';
import ScrollButton from '../components/scrollbutton';
import ProjectCard from '../components/projectcard';

// Font imports
import BrighterParadise from '../fonts/BrighterParadisePersonalUse-ovqMB.ttf';
import DMSerifDisplay from '../fonts/DMSerifDisplay-Regular.ttf';
import DMSerifText from '../fonts/DMSerifText-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DM Serif Display';
    src: url(${DMSerifDisplay}) format('truetype');
  }
  
  @font-face {
    font-family: 'Brighter Paradise Personal Use';
    src: url(${BrighterParadise}) format('truetype');
  }
  
  @font-face {
    font-family: 'DM Serif Text';
    src: url(${DMSerifText}) format('truetype');
  }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0B0B0D 0%, #898BA7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  transform: translateY(-2rem);
  position: relative;
  z-index: 2;
`;

const WelcomeText = styled.h2`
  font-family: 'DM Serif Display';
  font-size: 2.5rem;
  font-weight: normal;
  color: #B4BCC8;
  margin-bottom: 0.1rem;
`;

const CompanyName = styled.h1`
  font-family: 'Brighter Paradise Personal Use';
  font-size: 4rem;
  font-weight: normal;
  color: #B4BCC8;
  text-transform: uppercase;
  margin-bottom: -1rem;
`;

const Tagline = styled.p`
  font-family: 'DM Serif Text';
  font-size: 1.25rem;
  font-weight: normal;
  color: #B4BCC8;
  margin-top: 0.5rem;
  text-align: right;
`;

const projects = [
    {
      title: "TripVault",
      description: "A travel companion that helps users store critical information for every leg of their journey in one place for a hassle-free trip.",
      technologies: ["Swift"]
    },
    {
      title: "SymptomSense",
      description: "AI-powered medical diagnosis support tool designed for use by the general public that helps analyze symptoms and medical data to suggest potential diagnoses and treatment paths.",
      technologies: ["Swift", "Groq"]
    }
];

const ProjectsSection = styled.section`
  min-height: 100vh;
  background: #0B0B0D;
  padding: 80px 20px;
  position: relative;
  z-index: 2;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsTitle = styled.h2`
  font-family: 'DM Serif Display';
  font-size: 3rem;
  color: #B4BCC8;
  text-align: center;
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  padding: 20px;
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <TwinklingStars />
        <ContentContainer>
          <WelcomeText>welcome to</WelcomeText>
          <CompanyName>VESPERA TECHNOLOGIES</CompanyName>
          <Tagline>Creating minimalist apps with maximum impact</Tagline>
        </ContentContainer>
        <ScrollButton />
      </MainContainer>
      <ProjectsSection id="projects">
        <ProjectsContainer>
            <ProjectsTitle>Our Projects</ProjectsTitle>
            <ProjectsGrid>
            {projects.map((project, index) => (
                <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                />
            ))}
            </ProjectsGrid>
        </ProjectsContainer>
      </ProjectsSection>
    </>
  );
};

export default Home;