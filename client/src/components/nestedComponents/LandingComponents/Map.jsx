import React from 'react';
import { Box, WorldMap } from 'grommet';

class Map extends React.Component {
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
      <Box >
        {/* <WorldMap id="map" /> */}
        
      </Box>
    );
  }
} 

export default Map;