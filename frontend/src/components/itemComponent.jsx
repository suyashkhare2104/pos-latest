import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Container, Button, Row, Col } from 'reactstrap';

export class ItemComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedOption: '' ,
      quantity: 0,
      showList: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (selectedOption) => {
  this.setState({ selectedOption });
}


  render(){
    let options = this.props.items;
    const {selectedOption} = this.state;
    console.log(options);
    return(
    <div>
    <Container>
    <Row>
    <Col xs="9">
    <Select
    name="Select the product"
    value={this.state.selectedOption}
    onChange={this.handleChange}
    options={options}
    xs="9"
    />
    </Col>
    <Button href="#" type="submit">Add to cart</Button>
    </Row>
    </Container>
    </div>
    );
  }
}
