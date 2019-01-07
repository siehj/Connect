import React from 'react';
import '../../../../dist/cssFiles/CardManager.css';
import { Box, FormField, TextInput, Button } from 'grommet';

class CardManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box alignContent="center" direction="column" id="cardManager" >
        <Box direction="row" className="cmTop" alignContent="center" >
            <h2>Card Manager</h2>
        </Box>
        <Box direction="row" className="cmBottom" border="top" >
          <Box className="cmSearch" alignContent="center" >
            <FormField>
              <TextInput />
            </FormField>
          </Box>
          
        </Box>
      </Box>
    )
  }
}

export default CardManager;