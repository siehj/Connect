import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} /> 
    </Switch>
  )
}

ReactDOM.render( <BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));