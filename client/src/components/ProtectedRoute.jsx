import React from 'react';
import { Route } from 'react-router-dom';
import '../../dist/cssFiles/loading.css';

class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    };
  }

  componentDidMount() {

  }

  render() {
    // return <Route render={() => auth.authCheck() ? <props.component /> : <Redirect to="/login" /> } />
    // this.state.loading === true ? 
    return (
      <div className="loading" >
        <h1 > <a>...</a> LOADING<a>...</a></h1>
        <div className="loadingOverlay" ></div>
      </div>
    ) 
    // : null;
  }
}

export default ProtectedRoute;