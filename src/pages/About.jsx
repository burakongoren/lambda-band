import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGuitar, FaDrum, FaMicrophone, FaKeyboard } from 'react-icons/fa';

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

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Rock Salt', cursive;
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
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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
      role: "Lead Vocals",
      icon: <FaMicrophone />,
      image: "/members/ahmethan.jpg",
      bio: "Frontman with a voice that can shake arenas and lyrics that touch souls."
    },
    {
      id: 2,
      name: "Burak Öngören",
      role: " Guitar",
      icon: <FaGuitar />,
      image: "/members/burak.jpg",
      bio: "Guitar virtuoso known for mind-bending solos and innovative riffs."
    },
    {
      id: 3,
      name: "Devrim Odabaşı",
      role: "Lead Guitar",
      icon: <FaGuitar />,
      image: "/members/devrim.jpg",
      bio: "Rhythm master who keeps the band's heartbeat strong and steady."
    },
    {
      id: 4,
      name: "Oğuz Kaan Özcan",
      role: "Bass",
      icon: <FaGuitar />,
      image: "/members/oguz.jpg",
      bio: "Rhythm master who keeps the band's heartbeat strong and steady."
    },
    {
      id: 5,
      name: "Çağatay Biga",
      role: "Drums",
      icon: <FaDrum />,
      image: "/members/cagatay.jpg",
      bio: "Classically trained pianist who brings depth and texture to the band's sound."
    }
  ];

  return (
    <AboutContainer>
      <ContentWrapper>
        <Title>About LAMBDA</Title>
        <BandBio>
          <BioText>
            Formed in 2020, LAMBDA has been pushing the boundaries of rock music,
            blending classic rock elements with modern electronic influences. Their
            unique sound has earned them a dedicated following and critical acclaim
            across the globe. With three studio albums under their belt and countless
            sold-out shows, LAMBDA continues to evolve and inspire.
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