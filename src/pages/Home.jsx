import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import lambdaImage from '../assets/members/lambda.jpeg';
import lambdaMobileImage from '../assets/members/lambda-mobile.jpeg';
import lambdaLogo from '../assets/lambda-logo.png';
import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import About from './About';
import Music from './Music';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(255, 50, 50, 0.2), rgba(0, 0, 0, 0.7)),
    url(${lambdaImage}) top/cover no-repeat;
    
  @media (max-width: 1000px) {
    background: linear-gradient(rgba(255, 50, 50, 0.2), rgba(0, 0, 0, 0.7)),
      url(${lambdaMobileImage}) top/cover no-repeat;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  padding: 2rem;
  margin-top: 16rem;
`;

const Title = styled(motion.h1)`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: 'Rock Salt', cursive;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #ff4d4d;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3333;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff4d4d;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff3333;
    transform: translateY(-3px);
  }
`;

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <HomeContainer id="home">
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img src={lambdaLogo} alt="Lambda Logo" />
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Experience the raw power of rock
          </Subtitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <CTAButton href="/#music">Listen Now</CTAButton>
          </motion.div>
        </HeroContent>
      </HeroSection>
      <About />
      <Music />
      {showScrollButton && (
        <ScrollToTopButton onClick={scrollToTop}>
          <FaAngleUp />
        </ScrollToTopButton>
      )}
    </HomeContainer>
  );
}

export default Home; 