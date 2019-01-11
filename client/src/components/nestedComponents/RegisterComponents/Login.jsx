import React from 'react';
import { Box } from 'grommet';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const Login = (props) => {
  return(
    <Box direction="column">
      <Box direction="row" alignSelf="center" > 
        <h2>Log In</h2>
      </Box>
      <FormControl>
        <InputLabel style={{ color : 'white' }} htmlFor="loginUser">Username</InputLabel>
        <Input 
          id="loginUser"
          type='text'
          onChange={props.update}
          style={{ color : 'white' }}
        />
      </FormControl>
      <FormControl >
        <InputLabel style={{ color : 'white' }} htmlFor="loginPassword">Password</InputLabel>
          <Input 
            id="loginPassword"
            type='password'
            onChange={props.update}
            style={{ color : 'white' }}
          />
        </FormControl>
        <Box direction="row" alignSelf="center" >
            {/* <Link to="/signup" > */}
              <Button size="large" primary="true" onClick={() => props.changeScreen('signup')} >
                I need to Sign Up!
              </Button>
            {/* </Link> */}
          </Box>
    </Box>
  )
}

export default Login;