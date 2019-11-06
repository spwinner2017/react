
import { Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import validator from 'validator';
import React, { Component } from 'react';
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname:"",
      email:"",
      password:"",
      isAccepted:true,
      errors:{}
    }
  }
  handelUserNameOnChange=(event)=>{
    this.setState({
        uname:event.target.value
    })
}
handelEmailOnChange=(event)=>{
    this.setState({
        email:event.target.value
    })
}

handelPasswordOnChange=(event)=>{
    this.setState({
        password:event.target.value
    })
}
handelSubmit=(event)=>{
  console.log('handelSubmit executed',this.state);
  const er=this.validate(this.state.email);
  this.setState({
      errors:er
  })
  event.preventDefault();
}
validate=(email)=>{
    console.log('email',email);
  const err={};
  if (!validator.isEmail(email)) {
   err.invalidemail=" is not a valid email."
  }
  console.log('err',err);
  return err;
 }
 handelTermes=(event)=>{
  this.setState({
    isAccepted:!this.state.isAccepted
})
 }
  render() { 
    return (  
     
    <Grid   verticalAlign='middle' columns={3}>   
    <Grid.Column width={3}></Grid.Column>
     <Grid.Column  width={10}>
       <Header as='h2' color='teal' textAlign='center'>
         Register
       </Header>
       <Form size='large' onSubmit={this.handelSubmit}>
         <Segment stacked>
           <Form.Input fluid icon='user' required={true} iconPosition='left' placeholder='Enter Your Fullname'  value={ this.state.uname} onChange={this.handelUserNameOnChange} />
          <Form.Input fluid icon='mail' required={true} iconPosition='left' placeholder='E-mail address'  value={ this.state.email} onChange={this.handelEmailOnChange} />
            {this.state.errors.invalidemail &&  <span  style={{color:'red',padding:4}}>{this.state.errors.invalidemail}</span> }
           <Form.Input  fluid icon='lock' required={true} iconPosition='left'  placeholder='Password'  type='password'      value={ this.state.password} onChange={this.handelPasswordOnChange}     />
           <Form.Input  fluid icon='lock' required={true} iconPosition='left'  placeholder='Confirm Password'  type='password'         />
           <Form.Checkbox    checked={this.state.isAccepted} label='I agree to the Terms and Conditions' onClick={this.handelTermes} />
           <Form.Button>Submit</Form.Button>
           
         </Segment>
       </Form>
       {/* <Message>
         New to us? <a href='#'>Sign Up</a>
       </Message> */}
     </Grid.Column>
     <Grid.Column  width={3}></Grid.Column>
   </Grid>
  
 );
  }
}
 
export default LoginForm;