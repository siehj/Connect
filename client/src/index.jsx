import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Register} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/" component={Landing} /> 
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  )
}

ReactDOM.render( <BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));