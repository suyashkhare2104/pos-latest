import React from 'react';
import { Table} from 'reactstrap';
import Background from '../images/image2.jpg';
import { Card, Button, CardTitle, CardText, Row, Col, Badge, Container, Form, FormGroup, Label, Input} from 'reactstrap';
import {MyNavbar} from '../components/navbar';
var QRCode = require('qrcode.react');

var sectionStyle = {
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: '750px',
  backgroundImage: `url(${Background})`
};
var billNumber= Math.floor(Math.random() * 10000000);

export class Checkout extends React.Component{
  constructor (props) {
     super(props);
     this.state= ({rSelected: 0});
     this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
   }
   onRadioBtnClick(rSelected) {
      this.setState({ rSelected });
    }


  render(){
    let display= null;

    if(this.state.rSelected === 1){
      display = (
        <div>
        <QRCode value={billNumber} />
        </div>
      );
    }
    else if(this.state.rSelected === 2){
      display =(
        <Form>
        <FormGroup>
          <Label> <h3><Badge color="secondary">Enter CID</Badge></h3></Label>
          <Input type="text" />
        </FormGroup>
        <Button>Submit</Button>
        </Form>
        );
    }
    else if(this.state.rSelected === 3){
      display =(
        <Form>
        <FormGroup>
          <Label><h3> <Badge color="secondary">Enter Phone or Email</Badge></h3></Label>
          <Input type="text" />
        </FormGroup>
        <Button>Submit</Button>
        </Form>
        );
    }
console.log(this.state.rSelected);
    return(
      <div style={{'text-align':'center'}}>
      <section style={ sectionStyle }>
      <MyNavbar/>
      <Container>
      <h1> <Badge color="secondary">How do you want to receive your bill? </Badge></h1>
      <h3> <Badge color="secondary">Bill Number: {billNumber}</Badge> </h3>
      <Row>
      <Col sm="6">
       <Card body>
         <CardTitle>QR Code</CardTitle>
         <CardText>Get the bill on your phone by scanning a QR code.</CardText>
         <Button onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Scan QR code</Button>
       </Card>
       </Col>
        <Col sm="6">
       <Card body>
         <CardTitle>Customer ID</CardTitle>
         <CardText>Get bill on our app/SMS/email by entering CID.</CardText>
         <Button onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Enter CID</Button>
       </Card>
       </Col>
       </Row>
       <br/>
       <Row>
       <Col sm="6">
       <Card body>
         <CardTitle>SMS/Email</CardTitle>
         <CardText>Get bill on your phone through SMS/email.</CardText>
         <Button onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Enter phone number/email</Button>
       </Card>
       </Col>
       <Col sm="6">
       <Card body>
         <CardTitle>Get Printed bill</CardTitle>
         <CardText>WARNING: Printed bills harm you and the environment.</CardText>
         <Button>Print Bill</Button>
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
