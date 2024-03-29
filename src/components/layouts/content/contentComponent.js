import React, { Component } from 'react';
import {Link,Switch,Route } from 'react-router-dom'
import UserComponent from'../../user'
import DashboardComponent from '../../dashboardComponent';
import AboutComponent  from "../../about";
import SalaryComponet  from '../../employee/salaryComponent';
import ProfileComponet from '../../employee/profileComponent';
import LeaveComponent from '../../employee/leaveComponent';
import LoginForm from '../../forms/loginForm'
import SimpleRedux from '../../redux-exmaple/simpleReduxComponent'
import WrappedComponent from '../../higher-order-component-example/hoc-with-functions'
// import LoginComponent  from  '../../login/loginComponent'
class ContentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="page-content-wrapper">
    <div className="container-fluid">
    
        <div className="row">
            <div className="col-lg-12">
               
                <div>
        <Switch>
        <Route exact path="/" component={DashboardComponent}/>
        <Route strict exact path="/user"  component={UserComponent}/>
        <Route strict exact path="/about"  component={AboutComponent}/>
        <Route strict exact path="/employee/salary"  component={SalaryComponet}/>
        <Route strict exact path="/employee/profile"  component={ProfileComponet}/>
        <Route strict exact path="/employee/leave"  component={LeaveComponent}/>
        <Route strict exact path='/login' component={LoginForm}></Route>
        <Route strict exact path='/redux' component={SimpleRedux}></Route>
        <Route strict exact path='/hoc' component={WrappedComponent}></Route>
        {/* <Route strict exact path='/auth' component={LoginComponent}></Route> */}
        

        {/* <Route strict path="/user/:username"  
         render={({match})=>(
             this.state.logedin? (<user username={match.aparams.username}/>)
             :
             <Link to="/" />)
         }
        /> */}
        </Switch>
       
    </div>
               
            </div>
        </div>
    </div>
</div>
         );
    }
}
 
export default  ContentComponent;