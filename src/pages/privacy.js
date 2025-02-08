import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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

const PrivacyContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0B0B0D 0%, #898BA7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(11, 11, 13, 0.8);
  border-radius: 10px;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-family: 'Brighter Paradise Personal Use';
  font-size: 3rem;
  font-weight: normal;
  color: #B4BCC8;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-family: 'DM Serif Display';
  font-size: 1.8rem;
  color: #B4BCC8;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-family: 'DM Serif Text';
  font-size: 1.1rem;
  color: #B4BCC8;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const PrivacyPolicy = () => {
  return (
    <>
      <GlobalStyle />
      <PrivacyContainer>
      <ContentContainer>
        <Title>Privacy Policy</Title>
        
        <Section>
          <Text>
            At Vespera Technologies, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information when you use our services.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Data Collection</SectionTitle>
          <Text>
            We collect minimal data to ensure your experience is smooth and secure. This includes basic usage statistics and any information you voluntarily provide through our contact forms.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Data Usage</SectionTitle>
          <Text>
            The data we collect is used solely for improving our services and providing you with a better user experience. We do not share your personal information with third parties.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Data Protection</SectionTitle>
          <Text>
            We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. Your privacy and security are our top priorities.
          </Text>
        </Section>
      </ContentContainer>
    </PrivacyContainer>
    </>
  );
};

export default PrivacyPolicy;