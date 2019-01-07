import React from 'react';
import Home from './Home.jsx';
import CardManager from './CardManager.jsx';
import Charts from './Charts.jsx';
import Connections from './Connections.jsx';
import ResumeBuilder from './ResumeBuilder.jsx';

const DashboardRouting = (props) => {
  if (props.component === 'Home') return <Home />;
  if (props.component === 'CardManager') return <CardManager />;
  if (props.component === 'Charts') return <Charts />;
  if (props.component === 'Connections') return <Connections />;
  if (props.component === 'ResumeBuilder') return <ResumeBuilder />;
}

export default DashboardRouting;
