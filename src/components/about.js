import React, {Component} from 'react';
import { browserHistory } from 'react-router'
class AboutComponent extends Component {
    render() {
       return (

        <div>
         <div className="row">
             <h6>About workes</h6>
           <div className="col-sm-4 col-md-4 col-lg-6">
           <button className="btn btn-default" onClick={browserHistory.goBack}>Back</button>
           </div> 
         </div>
         
    <div>
        {/* <Route exact path="/" component={App}/> */}
       
     
   
       
    </div>
    </div>
       )
    }
}


export default AboutComponent;