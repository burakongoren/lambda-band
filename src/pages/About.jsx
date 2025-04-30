import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGuitar, FaDrum, FaMicrophone, FaKeyboard } from 'react-icons/fa';
import burakImage from '../assets/members/burak.jpeg';
import cagatayImage from '../assets/members/cagatay.jpeg';
import ahmethanImage from '../assets/members/ahmethan.jpeg';
import oguzImage from '../assets/members/oguz.jpg';
import devrimImage from '../assets/members/devrim.png';
import korayImage from '../assets/members/koray.jpeg';
import lambdaLogo from '../assets/lambda-logo.png';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  padding: 6rem 2rem 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  font-family: 'Rock Salt', cursive;
`;

const TitleImage = styled.img`
  height: 65px;
  margin-left: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const BandBio = styled.section`
  margin-bottom: 4rem;
  text-align: center;
`;

const BioText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #ccc;
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const MemberCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
`;

const MemberImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #ff4d4d;
`;

const MemberRole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
  color: #888;
`;

const MemberBio = styled.p`
  margin: 1rem 0 0;
  font-size: 0.9rem;
  color: #ccc;
`;

function About() {
  const members = [
    {
      id: 1,
      name: "Ahmethan Karasu",
      role: "Lead Vocal",
      icon: <FaMicrophone />,
      image: ahmethanImage,
      bio: "Frontman with a distinctive voice that brings emotion to the band's lyrics."
    },
    {
      id: 2,
      name: "Burak Öngören",
      role: "Rhythm Guitar",
      icon: <FaGuitar />,
      image: burakImage,
      bio: "Rhythm guitarist who provides solid foundations for the band's sound."
    },
    {
      id: 3,
      name: "Devrim Odabası",
      role: "Lead Guitar",
      icon: <FaGuitar />,
      image: devrimImage,
      bio: "Lead guitarist who adds melodic elements to the band's music."
    },
    {
      id: 4,
      name: "Oguz Kaan Özcan",
      role: "Bass",
      icon: <FaGuitar />,
      image: oguzImage,
      bio: "Bassist who provides the groove and depth to the band's sound."
    },
    {
      id: 5,
      name: "Çagatay Biga",
      role: "Drums",
      icon: <FaDrum />,
      image: cagatayImage,
      bio: "Drummer who keeps the rhythm and tempo of the band's performances."
    },
    {
      id: 6,
      name: "Koray",
      role: "Mascot",
      image: korayImage,
      bio: "Mascot of the LAMBDA"
    }
  ];

  return (
    <AboutContainer>
      <ContentWrapper>
        <TitleContainer>
          <Title>About </Title>
          <Link to="/">
            <TitleImage src={lambdaLogo} alt="Lambda Logo" />
          </Link>
        </TitleContainer>
        <BandBio>
          <BioText>
            Formed in 2023, LAMBDA has been pushing the boundaries of alternativerock music,
            blending classic rock elements with modern pop and electronic elements. 
          </BioText>
        </BandBio>
        <MembersGrid>
          {members.map((member) => (
            <MemberCard
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <MemberImage>
                <img src={member.image} alt={member.name} />
              </MemberImage>
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberRole>
                  {member.icon}
                  <span>{member.role}</span>
                </MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </MemberInfo>
            </MemberCard>
          ))}
        </MembersGrid>
      </ContentWrapper>
    </AboutContainer>
  );
}

export default About; 