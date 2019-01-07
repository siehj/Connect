import React from 'react';
import { Box, Chart } from "grommet";

const BarGraph = () => {
  return (
    <Box align="center" pad="small" onMouseEnter={() => document.getElementById('homeBarChart').append()} >
      <Chart id="homeBarChart" type="bar" color="white" round={true} color="#A08301" a11yTitle="profile views"
      // values={[[10, 20], [20, 30], [30, 15]]} 
      values={
        [
          {
            "value": [1, 10],
            "label": "January",
            // "onHover": "() => { console.log('first', this) }"
          },
          {
            "value": [2, 60],
            "label": "February",
            // "onHover": "() => { console.log('second', this) }"
          },
          {
            "value": [3, 15],
            "label": "March",
            // "onHover": "() => { console.log('third', this) }"
          },
          {
            "value": [4, 12],
            "label": "April",
            // "onHover": "() => { console.log('third', this) }"
          }
        ]
      } />
    </Box>
  )
};

export default BarGraph;
