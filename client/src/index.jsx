import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} /> 
      <ProtectedRoute path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

ReactDOM.render( <BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));