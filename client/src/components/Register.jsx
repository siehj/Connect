import React from 'react';
import { Box } from 'grommet';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import Login from './nestedComponents/RegisterComponents/Login.jsx';
import Signup from './nestedComponents/RegisterComponents/Signup.jsx';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen : 'login',
      username: '',
      firstname: '',
      password: '',

    };
    this.updateField = this.updateField.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
  }
  changeScreen(newScreen) {
    this.setState({ screen : newScreen }, () => history.pushState({ otherScreen : `${newScreen}` }, 'change screen', `/${newScreen}`))

  }

  updateField(e) {
    console.log(e.target.value);
  }

  render() {
    console.log(this.state.screen)
    return (
      <Box id="register" direction="column">
        <Box alignSelf="center" direction="column" id="registerBox" >
          {
            this.state.screen === 'login' ? 
            <Login screen={this.state.screen} update={this.updateField} changeScreen={this.changeScreen}  />
            :
            <Signup screen={this.state.screen} update={this.updateField} changeScreen={this.changeScreen} /> 
          }
          <Box direction="row" alignSelf="center" pad="xsmall">
            <Button size="large" className="registerBtns" primary="true"  >{ this.state.screen === 'login' ? "Login" : "Sign Up" } </Button>
            <Link to="/" >
              <Button size="large" className="registerBtns" primary="true" onClick={() => history.pushState({ goHome: 'true' }, "go home", "/")} >Cancel</Button> 
            </Link>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Register;