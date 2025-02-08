import React, { useState } from 'react';
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

// Your existing styled components...
const ContactContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0B0B0D 0%, #898BA7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(11, 11, 13, 0.8);
  border-radius: 10px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-family: 'Brighter Paradise Personal Use';
  font-size: 3rem;
  font-weight: normal;
  color: #B4BCC8;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #B4BCC8;
  border-radius: 5px;
  background: rgba(11, 11, 13, 0.6);
  color: #B4BCC8;
  font-family: 'DM Serif Text';
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #898BA7;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #B4BCC8;
  border-radius: 5px;
  background: rgba(11, 11, 13, 0.6);
  color: #B4BCC8;
  font-family: 'DM Serif Text';
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #898BA7;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: #B4BCC8;
  color: #0B0B0D;
  border: none;
  border-radius: 5px;
  font-family: 'DM Serif Display';
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background: #898BA7;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace this email with your business email
    const businessEmail = 'rays.of.light24@gmail.com';
    
    // Create email content
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    // Create mailto URL
    const mailtoUrl = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <GlobalStyle />
      <ContactContainer>
        <ContentContainer>
          <Title>Contact Us</Title>
          <ContactForm onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextArea
              name="message"
              placeholder="Your message..."
              required
              value={formData.message}
              onChange={handleChange}
            />
            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContentContainer>
      </ContactContainer>
    </>
  );
};

export default Contact;