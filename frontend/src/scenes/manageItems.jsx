import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {MyNavbar} from '../components/navbar';
import { Container, Table, Row, Col, Input, Button, ButtonGroup} from 'reactstrap';
import Background from '../images/image4.jpg';

var sectionStyle = {
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: '700px',
  backgroundImage: `url(${Background})`
};

export class ManageItems extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    items: []
  }
  this.handleChange = this.handleChange.bind(this);
}
  handleChange(e){
    this.setState(
      {
          [e.target.name]: e.target.value
      })
    }

  addItem(label,value,quantity){
    console.log(label);
    fetch('http://127.0.0.1:8000/items/', {
      method: 'POST',
      headers : 'content-type: application/json',
      body:JSON.stringify({label:label, value:value, quantity:quantity})
      }).then((res) => res.json())
      .then((data) =>  console.log(data))
      .catch((err)=>console.log(err))

    }

  componentWillMount() {
    axios.get(`http://127.0.0.1:8000/items/`)
      .then(res => {
        const items = res.data;
        this.setState({ items });

      })
  }
  render(){
    return(
      <div style={{'text-align':'center'}}>
      <MyNavbar/>
      <section style={ sectionStyle }>
      <br/>
      <br/>

      <Container>
      <Row>
      <Col xs={{ size: 10, offset: 1 }}>
      <Table dark hover size="sm" borderless responsive>
       <thead>
         <tr>
           <th>#</th>
           <th>Product Name</th>
           <th>Product Price</th>
           <th>Available quantity</th>
         </tr>
       </thead>
       <tbody>
       {this.state.items.map((item, index) => (
       <tr>
        <th>{index+1}</th>
        <td>{item.label}</td>
        <td>{item.value}</td>
        <td>{item.quantity}</td>
        <td>
          <Button>delete</Button>
        </td>
      </tr>
      ))}
      <tr>
       <th>#</th>

       <td><Input type="text" name="label" onChange={this.handleChange}/></td>
       <td><Input type="text" name="value" onChange={this.handleChange}/></td>
       <td><Input type="text" name="quantity" onChange={this.handleChange}/></td>
       <td><Button onClick={() => this.addItem(this.state.label,this.state.value,this.state.quantity)}>add</Button></td>

     </tr>
      </tbody>
      </Table>
      </Col>
      </Row>
      </Container>
      </section>
      </div>
    );
  }
}
