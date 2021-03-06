import React from 'react';
import { Clock, Box } from 'grommet';

const DigitalClock = (props) => {
  return (
    <Box align="center" justify="end" pad="small" id="clockBox" border="bottom" >
      <Clock size="xlarge" type="digital" id="clock" />
    </Box>
  )
}

export default DigitalClock;
