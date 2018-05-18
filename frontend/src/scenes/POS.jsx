import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {ItemComponent} from '../components/itemComponent';
import {MyNavbar} from '../components/navbar';
import Background from '../images/image3.jpg';
import { Jumbotron, Row, Col } from 'reactstrap';

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
      <div>
      <MyNavbar/>
      <section style={ sectionStyle }>
      <br/> <br/>

      <ItemComponent items= {this.state.items}/>

      </section>
      </div>
    );
  }
}
