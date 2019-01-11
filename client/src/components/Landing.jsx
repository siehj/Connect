import React from 'react';
import '../../dist/cssFiles/DarkLanding.css';
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
      <Box className="top" >
        <a id="slide" >
          <em id="connect" className="slide-bottom" >CONNECT</em>
        </a>
        <Link to="/login" >
          <Button id="getStarted" color={this.state.dark === true ?  'white' : 'rgb(160, 131, 1)' } label="Get Started" />
        </Link>
          {/* <em href="">/About</em>
            <br/> */}
          {/* <em href="">/How It Works</em> */}
      </Box>
        {/* <Map showMore={this.showMore} /> */}

      <Box className="landingTop"  >
      </Box>
      <Box>
        <a className="arrowHolder" onClick={this.showMore} data-scroll href="#firstSection" >
          <div className="arrow"></div>
        </a>
      </Box>
        {
          this.state.showMore === true ? <LandingNext /> : null
        }
      </div>
    )
  }
}

export default Landing;

// IDEAS FOR BACKGROUND STUFF
// https://codepen.io/ciprianionescu/pen/jbCnL
// https://codepen.io/JonasBadalic/pen/cwEtH
// 
