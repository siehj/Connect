import React from 'react';
import { Box, WorldMap } from 'grommet';

class DashboardMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelectPlace(place) {
    console.log(place);
    // this.setState({ places: [{ location: place }] 
  };

  render() {
    const { places } = this.state;
    return (
      <Box className="dashMapBox" >
        <WorldMap id="dashMap" alignSelf="stretch" viewBox="-50 0 900 455" />
      </Box>
    );
  }
} 

export default DashboardMap;