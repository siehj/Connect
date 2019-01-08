import React from 'react';
import { Link } from 'react-router-dom';
import Login from './nestedComponents/RegisterComponents/Login.jsx';
import { Box, Button } from 'grommet';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen : this.props.location.pathname.split('/')[1],
      username: '',
      firstname: '',
      password: '',

    };
  }

  render() {
    return (
      <Box id="register" direction="column" alignContent="center" >
        <Box alignSelf="center" direction="column" id="registerBox" >
          <Box direction="row" alignSelf="center" >
            <h2>{this.state.screen.toUpperCase()}</h2>
          </Box>
          <Login/>
          <Box direction="row" alignSelf="center" pad="large">
            <Button margin="medium" className="registerBtns" primary color="white" >{ this.state.screen === 'login' ? "Login" : "Sign Up" } </Button>
            {/* <Link to="/" > */}
              <Button margin="medium" className="registerBtns" primary color="black" >Cancel</Button> 
            {/* </Link> */}
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Register;