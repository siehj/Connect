import React from 'react';
import { Distribution, Box, Text } from 'grommet';
import DigitalClock from './Clock.jsx';
import DashboardMap from './DashMap.jsx';

const Home = (props) => {
  return (
    <Box className="Home">
      <Box>
        <DigitalClock />
        <DashboardMap />
      </Box>
      <h1>HOME</h1>
    </Box>
  )
}

export default Home;