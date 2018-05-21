import React from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import Background from '../images/image1.jpg';
import AuthService from '../components/AuthService';


var sectionStyle = {
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: '750px',
  backgroundImage: `url(${Background})`
};


export class Login extends React.Component{
  constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

  componentWillMount(){
      if(this.Auth.loggedIn())
          this.props.history.replace('/');
  }

  render(){
    return(
      <div >

      <section style={ sectionStyle }>
      <br/> <br/>
      <br/> <br/>
      <Jumbotron className="container" style={{ width: '20%' }} >
      <Form>
       <FormGroup>
         <Label for="LoginID">Username or Email</Label>
         <Input name="username" id="exampleEmail" placeholder="email/username" onChange={this.handleChange} />
       </FormGroup>
       <FormGroup>
         <Label for="examplePassword">Password</Label>
         <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={this.handleChange} />
       </FormGroup>
       <br/>
       <Button href="/" type="submit" onSubmit= {this.handleFormSubmit}>Login</Button>
       </Form>
      </Jumbotron>
      </section>
      </div>
    );
  }

  handleChange(e){
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
}
handleFormSubmit(e){
        e.preventDefault();

        this.Auth.login(this.state.username,this.state.password)

    }
}
