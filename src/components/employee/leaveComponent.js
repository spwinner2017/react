import React, { Component } from 'react';
import { browserHistory } from 'react-router'
class LeaveComponent  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="row">
        <h6>Leave workes</h6>
      <div className="col-sm-4 col-md-4 col-lg-6">
      <button className="btn btn-default" onClick={browserHistory.goBack}>Back</button>
      </div> 
      </div>
     );
    }
}
 
export default LeaveComponent;