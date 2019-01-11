import React from 'react';
import { Box } from 'grommet';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const Signup = (props) => {
  return(
    <Box direction="column" >
       <Box direction="row" alignSelf="center" > 
        <h2>Sign Up</h2>
      </Box>
      <FormControl>
        <InputLabel style={{ color : 'white' }} htmlFor="FirstName">First Name</InputLabel>
        <Input 
          id="FirstName"
          type='text'
          onChange={props.update}
          style={{ color : 'white' }}
        />
      </FormControl>
      <FormControl>
        <InputLabel style={{ color : 'white' }} htmlFor="LastName">Last Name</InputLabel>
        <Input 
          id="LastName"
          type='text'
          onChange={props.update}
          style={{ color : 'white' }}
        />
      </FormControl>
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
            {/* <Link to="/login" > */}
              <Button size="large" primary="true" onClick={() => props.changeScreen('login')} >
                I need to Log In!
              </Button>
            {/* </Link> */}
          </Box>
    </Box>
  )
}

export default Signup;