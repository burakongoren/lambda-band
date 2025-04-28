import styled from '@emotion/styled';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 3rem 2rem;
  border-top: 1px solid #333;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  color: #ff4d4d;
  margin: 0;
  font-size: 1.2rem;
`;

const FooterText = styled.p`
  color: #888;
  margin: 0;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4d4d;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #888;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>LAMBDA</FooterTitle>
          <FooterText>
            Experience the future of rock music with LAMBDA. Join us on our journey
            to redefine the genre.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>
            Email: info@lambdaband.com<br />
            Management: management@lambdaband.com<br />
            Booking: booking@lambdaband.com
          </FooterText>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} LAMBDA. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer; 