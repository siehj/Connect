import React from 'react';
import Home from './Home.jsx';

const DashboardRouting = (props) => {
  if (props.component === 'Home') return <Home />;

}

export default DashboardRouting;
