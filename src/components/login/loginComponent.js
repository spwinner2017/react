
import { Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import React, { Component } from 'react';
import ContentComponent  from './../layouts/content/contentComponent';
import SideBarComponent from './../layouts/sidebar/sidebarComponent';
import HeaderComponent from './../layouts/header/headerComponent';
import ReactDOM from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname:"",
      password:"",     
      errors:{}
    }
  }
  handelUserNameOnChange=(event)=>{
    this.setState({
        uname:event.target.value
    })
}


handelPasswordOnChange=(event)=>{
    this.setState({
        password:event.target.value
    })
}
handelSubmit=(event)=>{
  console.log('handelSubmit executed',this.state);
  ReactDOM.render(
    <Provider>
    <BrowserRouter>
    <div id="wrapper" >
    <SideBarComponent/>
    <HeaderComponent></HeaderComponent>
    <div id="content">
     <ContentComponent/>
  </div> 
</div>
</BrowserRouter>
</Provider>
 ,
    document.getElementById("root")
    );
  event.preventDefault();
}


 
  render() { 
    return (  
     
      <div className="row">
      <div className="col-md-5 login">
      <Form size='large' onSubmit={this.handelSubmit}>
      <Segment stacked>
      <Header as='h2' color='teal' textAlign='center'>
    Sign in
    </Header>
        <Form.Input fluid icon='user' required={true} iconPosition='left' placeholder='User Name'  value={ this.state.uname} onChange={this.handelUserNameOnChange} />
        <Form.Input  fluid icon='lock' required={true} iconPosition='left'  placeholder='Password'  type='password'      value={ this.state.password} onChange={this.handelPasswordOnChange}     />
        <Form.Button>Login</Form.Button>
      </Segment>
    </Form>
      </div>

    </div>
  
 );
  }
}
 
export default LoginComponent;