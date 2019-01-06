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

  
  render() {
    // return <Route render={() => auth.authCheck() ? <props.component /> : <Redirect to="/login" /> } />
  //   this.state.loadingCount <= screen.width ?
  //   setTimeout(() => {
  //     this.state.loadingCount <= screen.width ? this.setState({ loadingCount : this.state.loadingCount+(screen.width/80) }) : this.setState({ loading: false })
  //   }, 50) : setTimeout(() => this.setState({ loading: false }), 2500);
    
    
  //   if (this.state.loading === true) {
  //     return (
  //       <div className="loading" >
  //         <div className="loadingOverlay" style={{ width: `${this.state.loadingCount}px` }} >
  //           {
  //             this.state.loadingCount >= screen.width ? <h1 className="bounce-top">WELCOME</h1> : null
  //           }
  //         </div> 
  //         <h1>...LOADING...</h1>
  //       </div>
  //     ) 
  //   } 
  // if (this.state.loading === false) return <Route render={() => <this.props.component />} />
    
  //   // : null;
    return <this.props.component />
  }
}


export default ProtectedRoute;