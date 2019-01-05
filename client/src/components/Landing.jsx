import React from 'react';
import '../../dist/cssFiles/DarkLanding.css';
// import '../../dist/cssFiles/LightLanding.css';
import Map from './nestedComponents/LandingComponents/Map.jsx';
import LandingNext from './nestedComponents/LandingComponents/LandingNext.jsx';
import { Box, Button } from 'grommet';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      dark: true,
      displayFullPage: false
    };
    this.showMore = this.showMore.bind(this);
  };

  showMore() {
    this.setState({ showMore : true });
    history.replaceState('without hash', 'without hash', '/')
  }

  render() {
    return (
      <div className="landing" >
      <Box className="top" align="end" >
        <em id="connect" className="slide-bottom" >CONNECT</em>
        <Link to="/dashboard" >
          <Button id="getStarted" color={this.state.dark === true ?  'white' : 'rgb(160, 131, 1)' } label="Get Started" />
        </Link>
          {/* <em href="">/About</em>
            <br/> */}
          {/* <em href="">/How It Works</em> */}
      </Box>
        <Map showMore={this.showMore} />
        {
          this.state.showMore === true ? <LandingNext /> : null
        }
      </div>
    )
  }
}

export default Landing;
