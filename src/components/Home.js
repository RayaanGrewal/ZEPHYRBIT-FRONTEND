import React , { Component } from 'react';
import { Image } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render()
  {
  return(
    <div>
      <NavbarComponent/>
      <Image src={require("../assets/logo1.png")} fluid />
    </div>
 );
  }
}

export default Home;
