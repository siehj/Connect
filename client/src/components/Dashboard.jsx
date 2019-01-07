import React from 'react';
import '../../dist/cssFiles/Dashboard.css';
import NavBar from './nestedComponents/DashboardComponents/NavBar.jsx';
import AssistBar from './nestedComponents/DashboardComponents/AssistBar.jsx';
import DashboardRouting from './nestedComponents/DashboardComponents/DashboardRouting.jsx'
import { Box } from 'grommet';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Home',
      displayAssistBar: false
    };

    this.toggleAssistBar = this.toggleAssistBar.bind(this);
  }

  toggleAssistBar() {
    this.setState({ displayAssistBar : !this.state.displayAssistBar }, () => {
      this.state.displayAssistBar === false ? 
      document.getElementById('AssistBar').style.width = '0%' //close 
      :
      document.getElementById('AssistBar').style.width = '3%'; //open 
    })
  }

  changeScreens(e) {
    console.log(e.target.title);
    this.setState({ screen : e.target.title });
  }

  render() {
    return (
      <Box id="dashboard" >
 
        <div className="navs" >
          <NavBar toggle={this.toggleAssistBar} /> 
          <AssistBar />
        </div>

        <div className="dashScreen">
          <DashboardRouting component={this.state.screen} />
        </div>

      </Box>
    )
  }
}

export default Dashboard;
