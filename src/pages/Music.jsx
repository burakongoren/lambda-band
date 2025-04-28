import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const MusicContainer = styled.div`
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

const VideoSection = styled.section`
  margin-bottom: 4rem;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 0 auto;
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const MusicPlayer = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
`;

const TrackList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Track = styled(motion.li)`
  padding: 1rem;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const TrackInfo = styled.div`
  flex: 1;
`;

const TrackTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const TrackDuration = styled.span`
  color: #888;
  margin-left: 1rem;
`;

function Music() {
  const tracks = [
    { id: 1, title: "Electric Dreams", duration: "3:45" },
    { id: 2, title: "Neon Nights", duration: "4:20" },
    { id: 3, title: "Digital Revolution", duration: "5:15" },
    { id: 4, title: "Binary Sunset", duration: "3:55" },
    { id: 5, title: "Code Breaker", duration: "4:10" },
  ];

  return (
    <MusicContainer>
      <ContentWrapper>
        <Title>Music</Title>
        <VideoSection>
          <VideoWrapper>
            <VideoFrame
              src="https://www.youtube.com/embed/VassFJpR2f8"
              title="LAMBDA - Official Music Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoWrapper>
        </VideoSection>
        <MusicPlayer>
          <TrackList>
            {tracks.map((track) => (
              <Track
                key={track.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TrackInfo>
                  <TrackTitle>{track.title}</TrackTitle>
                </TrackInfo>
                <TrackDuration>{track.duration}</TrackDuration>
              </Track>
            ))}
          </TrackList>
        </MusicPlayer>
      </ContentWrapper>
    </MusicContainer>
  );
}

export default Music; 