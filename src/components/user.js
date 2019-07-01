import React, {Component} from 'react';
 import { browserHistory } from 'react-router'
class UserComponent extends Component {
    render() {
       return (
       <div>
       {/* <h6>user Data {this.props.match.params.username}</h6> */}
        <div className="row">
        <h6>User workes</h6>
      <div className="col-sm-4 col-md-4 col-lg-6">
      <button className="btn btn-default" onClick={browserHistory.goBack}>Back</button>
      </div> 
      </div>
      
    </div>)
    }
}


export default UserComponent;