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
        <Box direction="row" className="cmTop" alignSelf="center" >
          <h2 className="dashboardTitles text-center" >Card Manager</h2>
        </Box>
        <Box direction="column" className="cmBottom" border="top" >
          <Box className="cmSearch" direction="row" alignSelf="center" >
            <img src="data:image/png;base64,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"/>
            <FormField alignSelf="center" >
              <TextInput placeholder="Search" plain="true" className="cmSearch" />
            </FormField>
          </Box>
          <Box direction="row" alignSelf="center" >

          </Box>
          
        </Box>
      </Box>
    )
  }
}

export default CardManager;