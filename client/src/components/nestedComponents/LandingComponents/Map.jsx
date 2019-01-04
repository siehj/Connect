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
        <WorldMap id="map" />
        <a onClick={this.props.showMore} data-scroll href="#firstSection" >
          <div className="arrow"></div>
        </a>
      </Box>
    );
  }
} 

export default Map;