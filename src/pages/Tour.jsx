import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaTicketAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const TourContainer = styled.div`
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

const TourGrid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 0;
`;

const TourCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TourInfo = styled.div`
  display: grid;
  gap: 1rem;
`;

const TourDate = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ff4d4d;
`;

const TourLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TourVenue = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const TourCity = styled.p`
  margin: 0;
  color: #888;
`;

const TicketButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: #ff4d4d;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3333;
  }
`;

function Tour() {
  const tourDates = [
    {
      id: 1,
      date: "April 15, 2024",
      venue: "Madison Square Garden",
      city: "New York, NY",
      ticketLink: "https://tickets.example.com/msg"
    },
    {
      id: 2,
      date: "April 18, 2024",
      venue: "Staples Center",
      city: "Los Angeles, CA",
      ticketLink: "https://tickets.example.com/staples"
    },
    {
      id: 3,
      date: "April 21, 2024",
      venue: "United Center",
      city: "Chicago, IL",
      ticketLink: "https://tickets.example.com/united"
    },
    {
      id: 4,
      date: "April 25, 2024",
      venue: "American Airlines Center",
      city: "Dallas, TX",
      ticketLink: "https://tickets.example.com/aac"
    }
  ];

  return (
    <TourContainer>
      <ContentWrapper>
        <Title>Tour Dates</Title>
        <TourGrid>
          {tourDates.map((tour) => (
            <TourCard
              key={tour.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <TourInfo>
                <TourDate>
                  <FaCalendarAlt />
                  <span>{tour.date}</span>
                </TourDate>
                <TourLocation>
                  <FaMapMarkerAlt />
                  <div>
                    <TourVenue>{tour.venue}</TourVenue>
                    <TourCity>{tour.city}</TourCity>
                  </div>
                </TourLocation>
              </TourInfo>
              <TicketButton
                href={tour.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTicketAlt />
                Get Tickets
              </TicketButton>
            </TourCard>
          ))}
        </TourGrid>
      </ContentWrapper>
    </TourContainer>
  );
}

export default Tour; 