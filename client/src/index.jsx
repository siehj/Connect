import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} /> 
      <Route exact path="/login" component={Register} />
      <Route exact path="/signup" component={Register} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

ReactDOM.render( <BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));