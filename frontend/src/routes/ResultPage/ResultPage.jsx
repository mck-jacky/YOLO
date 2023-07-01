import React from 'react'
import { Box, Container } from '@mui/system';
import Result from '../../components/Result';
import { Typography } from '@mui/material';

const ResultPage = () => {
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

        <Result
          title="The War On Drugs"
          time="Mon, 4 Dec 2023, 6:00 pm"
          location="Sydney Opera House - Forecourt, Sydney, NSW"
          nOfTickets="4"
          image="https://s1.ticketm.net/tm/en-au/dam/a/c7a/e92e76cc-05f5-49ba-a4ec-9f09d5822c7a_EVENT_DETAIL_PAGE_16_9.jpg"
        />

        <Result
          title="The War On Drugs"
          time="Mon, 4 Dec 2023, 6:00 pm"
          location="Sydney Opera House - Forecourt, Sydney, NSW"
          nOfTickets="4"
          image="https://s1.ticketm.net/tm/en-au/dam/a/c7a/e92e76cc-05f5-49ba-a4ec-9f09d5822c7a_EVENT_DETAIL_PAGE_16_9.jpg"
        />

        <Result
          title="The War On Drugs"
          time="Mon, 4 Dec 2023, 6:00 pm"
          location="Sydney Opera House - Forecourt, Sydney, NSW"
          nOfTickets="4"
          image="https://s1.ticketm.net/tm/en-au/dam/a/c7a/e92e76cc-05f5-49ba-a4ec-9f09d5822c7a_EVENT_DETAIL_PAGE_16_9.jpg"
        />
        
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