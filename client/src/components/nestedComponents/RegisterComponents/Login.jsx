import React from 'react';
import { Box, FormField, TextInput } from 'grommet';

const Login = (props) => {
  return(
    <Box>
      <FormField>
        <label>Username</label>
        <TextInput plain="true" title="login" name="username" />
      </FormField>
      <br/>
      <FormField>
        <label>Password</label>
        <TextInput plain="true" title="login" type="password" />
      </FormField>
    </Box>
  )
}

export default Login;