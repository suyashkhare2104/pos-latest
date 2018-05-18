import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {MyNavbar} from '../components/navbar';
import {MyCarousel} from '../components/carousel';

export class Home extends React.Component{
  render(){
    return(
      <div>
      <MyNavbar/>
      <MyCarousel/>
      </div>
  );
  }
}
