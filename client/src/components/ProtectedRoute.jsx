import React from 'react';
import { Route } from 'react-router-dom';
import '../../dist/cssFiles/loading.css';

class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      loadingCount: 10
    };
  }

  componentDidMount() {
 
  }



  render() {
    // return <Route render={() => auth.authCheck() ? <props.component /> : <Redirect to="/login" /> } />
    // this.state.loading === true ?
 
    this.state.loadingCount <= screen.width ?
    setTimeout(() => {
      this.state.loadingCount <= screen.width ? this.setState({ loadingCount : this.state.loadingCount+(screen.width/100) }, () => console.log(this.state.loadingCount)) : this.setState({ loading: false }, () => console.log('done loading!'))
    }, 100) : console.log(this.state.loadingCount <= screen.width);

    return (
      <div className="loading" >
        <div className="loadingOverlay" style={{ width: `${this.state.loadingCount}px` }} >
          {
            this.state.loadingCount >= screen.width ? <h1 className="bounce-top">WELCOME</h1> : null
          }
        </div> 
        <h1 > <a>...</a> LOADING<a>...</a></h1>
      </div>
    ) 
    // : null;
  }
}

export default ProtectedRoute;