import React from 'react'
import { Box, Container } from '@mui/system';
import Result from '../../components/Result';
import { Typography } from '@mui/material';
import './index.css'

const ResultPage = () => {
  const [events, setEvents] = React.useState([
    // Initial events data
    { id: 1, title: 'Event 1', time: '10:00 AM', location: 'Location 1', nOfTickets: 5, image: "https://s1.ticketm.net/tm/en-au/dam/a/c7a/e92e76cc-05f5-49ba-a4ec-9f09d5822c7a_EVENT_DETAIL_PAGE_16_9.jpg"},
    { id: 2, title: 'Event 2', time: '2:00 PM', location: 'Location 2', nOfTickets: 10, image: "https://s1.ticketm.net/tm/en-au/dam/a/c7a/e92e76cc-05f5-49ba-a4ec-9f09d5822c7a_EVENT_DETAIL_PAGE_16_9.jpg"},
    // Add more events as needed
  ]);

  const handleRemove = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) => {
        if (event.id === eventId) {
          return { ...event, isRemoving: true }; // Set isRemoving flag to true for the event to trigger the animation
        }
        return event;
      })
    );

    setTimeout(() => {
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
    }, 500); // Delay removal of the event to allow animation to complete (adjust timing as needed)
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh'
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5
        }}
      >
        <Typography 
          variant="h2"
          sx={{
            fontSize: 32,
            fontWeight: 800,
            width: 500,
            marginBottom: 4
          }}
        >
          Result
        </Typography>

        {events.map((event) => (
          <div
            key={event.id}
            className={`event-container ${event.isRemoving ? 'slide-out' : ''}`}
          >
            <Result
              title={event.title}
              time={event.time}
              location={event.location}
              nOfTickets={event.nOfTickets}
              image={event.image}
              onRemove={() => handleRemove(event.id)}
            />
        </div>

        ))}
        
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          width: '60%',
          backgroundColor: 'blue'
        }}
      >
        dsfklmsd
      </Box>

    </Box>
  )
}

export default ResultPage