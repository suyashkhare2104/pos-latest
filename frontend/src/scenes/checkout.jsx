import React from 'react';
import { Table} from 'reactstrap';
import Background from '../images/image2.jpg';
import { Card, Button, CardTitle, CardText, Row, Col, Badge, Container, Form, FormGroup, Label, Input} from 'reactstrap';
import {MyNavbar} from '../components/navbar';
var imageName = require('../images/qrCode.png')

var sectionStyle = {
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: '750px',
  backgroundImage: `url(${Background})`
};

export class Checkout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: 0
    }
    console.log(this.state.display);
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(index) {
      this.setstate = {display:index};
    }

  render(){
    let display= null;
    if(this.state.display = 1){
      display = <img src={imageName} />;
    }
    else if(this.state.display = 2){
      display =(
        <Form>
        <FormGroup>
          <Label>CID</Label>
          <Input type="text" />
        </FormGroup>
        </Form>
        );
    }
    else if(this.state.display = 3){
      display =(
        <Form>
        <FormGroup>
          <Label>Phone or Email</Label>
          <Input type="text" />
        </FormGroup>
        </Form>
        );
    }
console.log(this.state.display);
    return(
      <div style={{'text-align':'center'}}>
      <section style={ sectionStyle }>
      <MyNavbar/>
      <Container>
      <h1> <Badge color="secondary">How do you want to receive your bill? </Badge></h1>
      <Row>
      <Col sm="6">
       <Card body>
         <CardTitle>QR Code</CardTitle>
         <CardText>Get the bill on your phone by scanning a QR code.</CardText>
         <Button onClick= {this.handleClick(1)}>Scan QR code</Button>
       </Card>
       </Col>
        <Col sm="6">
       <Card body>
         <CardTitle>Customer ID</CardTitle>
         <CardText>Get bill on our app/SMS/email by entering CID.</CardText>
         <Button onClick= {this.handleClick(2)}>Enter CID</Button>
       </Card>
       </Col>
       </Row>
       <br/>
       <Row>
       <Col sm="6">
       <Card body>
         <CardTitle>SMS/Email</CardTitle>
         <CardText>Get bill on your phone through SMS/email.</CardText>
         <Button onClick= {this.handleClick(3)}>Enter phone number/email</Button>
       </Card>
       </Col>
       <Col sm="6">
       <Card body>
         <CardTitle>Get Printed bill</CardTitle>
         <CardText>WARNING: Printed bills harm you and the environment.</CardText>
         <Button onClick= {this.handleClick(4)}>Print Bill</Button>
       </Card>
       </Col>
       </Row>
       <br/>
       <Row>
       <Col offset="6">
       {display}
       </Col>
       </Row>

       </Container>
      </section>
      </div>
    );
  }
}
