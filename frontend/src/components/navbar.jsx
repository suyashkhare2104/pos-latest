import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import AuthService from './AuthService';
const Auth = new AuthService();

export class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLogout(){
   Auth.logout()
}
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='/POS'>POS Screen</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/manageitems">Manage Items</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" onClick={this.handleLogout.bind(this)}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
