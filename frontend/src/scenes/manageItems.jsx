import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {MyNavbar} from '../components/navbar';
import { Container, Table, Row, Col, Input, Form, Button, ButtonGroup} from 'reactstrap';
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
      <Col xs={{ size: 8, offset: 2 }}>
      <Table dark hover size="sm" bordered responsive>
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
        <td><ButtonGroup>
        <Button>edit</Button>
        <Button>delete</Button>
      </ButtonGroup></td>
      </tr>
      ))}
      <tr>
       <th>#</th>

       <td><Input type="text" name="text" id="exampleText" /></td>
       <td><Input type="text" name="text" id="exampleText" /></td>
       <td><Input type="text" name="text" id="exampleText" /></td>
       <td><Button>add</Button></td>

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
