import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {MyNavbar} from '../components/navbar';
import Background from '../images/image3.jpg';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Jumbotron, Container, Button, Row, Col, Table, Badge, ButtonGroup } from 'reactstrap';


let selectedItemsList = [];
let grandTotal = 0;
var sectionStyle = {
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: '750px',
  backgroundImage: `url(${Background})`
};

export class POS extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    items: [],
    selectedOption: '' ,
    quantity: 0,
    showList: false,
    initiateStateChangeForRenderToLoadAgain: 0
  }
    this.handleChange = this.handleChange.bind(this);
    this.incrementItem = this.incrementItem.bind(this);
    this.decrementItem = this.decrementItem.bind(this);
}
    handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  incrementItem = (index) => {
  selectedItemsList[index].quantity += 1;
  selectedItemsList[index].total = selectedItemsList[index].value * selectedItemsList[index].quantity;
  grandTotal += selectedItemsList[index].value;
  this.setState({initiateStateChangeForRenderToLoadAgain: grandTotal});
  console.log(selectedItemsList);
}

decrementItem = (index) => {
  if (selectedItemsList[index].quantity !== 0){
    selectedItemsList[index].quantity -= 1;
    selectedItemsList[index].total = selectedItemsList[index].value * selectedItemsList[index].quantity;
    grandTotal -= selectedItemsList[index].value;
  }
  this.setState({initiateStateChangeForRenderToLoadAgain: grandTotal});
  console.log(selectedItemsList);
}

addToCart = () => {

  let checkMultipleProductsCounter = 0;
  selectedItemsList.map(product => {
    if(this.state.selectedOption.label === product.label){
       checkMultipleProductsCounter += 1;
    }
    return 'x';
  });

  if(this.state.selectedOption.label == null){
    alert("Select a product.");
  }
  else if (checkMultipleProductsCounter > 0) {
    alert("Product is already present in your shopping cart.");
  }
  else{
    let tempArray = [
      { label: this.state.selectedOption.label,
        value: this.state.selectedOption.value,
        quantity: 0,
        total: 0},
      ];
    selectedItemsList = selectedItemsList.concat(tempArray);
    this.setState(
      {selectedOption : ''}
    );
  }
}

handleDeleteItem = (index) => {
  const itemTotal = selectedItemsList[index].value * selectedItemsList[index].quantity ;
  grandTotal = grandTotal - itemTotal ;
  selectedItemsList.splice(index,1);
  this.setState({initiateStateChangeForRenderToLoadAgain: grandTotal});
}


  componentWillMount() {
    axios.get(`http://127.0.0.1:8000/items/`)
      .then(res => {
        const items = res.data;
        this.setState({ items });

      })
  }

  render(){
    let options = this.state.items;
    const {selectedOption} = this.state;
    let itemstable = null;
    if(selectedItemsList.length > 0){
    itemstable = (
        <div>
          <Table dark borderless responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Rate</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Change Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              { selectedItemsList.map((product, index) => {
                return (
                  <tr>
                    <th scope='row'>{index+1}</th>
                    <td>{product.label}</td>
                    <td>{product.value}</td>
                    <td>{product.quantity}</td>
                    <td>{product.total}</td>
                    <td>
                    <ButtonGroup>
                    <Button onClick={() => this.incrementItem(index)}>increase</Button>
                    <Button onClick={() => this.decrementItem(index)}>decrease</Button>
                    </ButtonGroup>
                    </td>
                    <td><Button onClick= {() => this.handleDeleteItem(index)}>Delete</Button></td>
                  </tr>
                )
              })}

            </tbody>
          </Table>
        </div>
      );
    }
    let GT = null;
    let checkout = null;
    if(grandTotal > 0){
      GT=  <h3> <Badge color="secondary">Total: {grandTotal} </Badge></h3>;
      checkout =  <Button color="success" size="md" href="/checkout" onClick={this.checkout}>Checkout</Button>;
    }

    return(
      <div>
      <MyNavbar/>
      <section style={ sectionStyle }>
      <br/> <br/>
      <Container>
      <Row>
      <Col xs={{ size: 8, offset: 0 }}>
      <Select
      name="Select the product"
      value={this.state.selectedOption}
      onChange={this.handleChange}
      options={options}
      />
      </Col>
      <Button onClick={this.addToCart} size="md">Add to cart</Button>
      <Col>
      {checkout}
      </Col>
      <Col>
      {GT}
      </Col>
      </Row>
      <Row>
      <Col sm={{ size: 8, offset: 0 }}>
      {itemstable}
      </Col>
      </Row>
      </Container>
      </section>
      </div>
    );
  }

}
