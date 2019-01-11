import React from 'react';
import { Box } from 'grommet';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const Signup = (props) => {
  return(
    <Box direction="column" className="signup" >
      <Box direction="row" alignSelf="center" > 
        <h2>Sign Up</h2>
      </Box>
      <FormControl>
        <InputLabel style={{ color : 'white' }} htmlFor="FirstName">First Name</InputLabel>
        <Input 
          id="FirstName"
          name="firstname"
          type='text'
          onChange={props.update}
          style={{ color : 'white' }}
        />
      </FormControl>
      <FormControl>
        <InputLabel style={{ color : 'white' }} htmlFor="LastName">Last Name</InputLabel>
        <Input 
          id="LastName"
          name="lastname"
          type='text'
          onChange={props.update}
          style={{ color : 'white' }}
        />
      </FormControl>
      <FormControl>
        <InputLabel style={{ color : 'white' }} htmlFor="loginUser">Username</InputLabel>
        <Input 
          id="loginUser"
          name="username"
          type='text'
          onChange={props.update}
          style={{ color : 'white' }}
        />
      </FormControl>
      <FormControl >
        <InputLabel style={{ color : 'white' }} htmlFor="loginPassword">Password</InputLabel>
          <Input 
            id="loginPassword"
            name="password"
            type='password'
            onChange={props.update}
            style={{ color : 'white' }}
          />
      </FormControl>
      <Box direction="row" alignSelf="center" className="switchBtn" >
        <Button  size="large" primary="true" onClick={() => props.changeScreen('login')} >
          I need to Log In!
        </Button>
      </Box>
    </Box>
  )
}

export default Signup;