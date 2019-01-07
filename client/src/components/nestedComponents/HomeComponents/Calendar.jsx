import React from 'react';
import { Box, Calendar } from 'grommet';

class RangeCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box align="center" pad="xsmall" className="homeCalendar" >
        <Calendar range size="small" />
      </Box>
    )
  }
};

export default RangeCalendar;