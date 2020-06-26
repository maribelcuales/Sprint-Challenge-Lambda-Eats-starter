import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './styles.css';

function Header() {
  return (
    <div className="header-container">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="lambda-eats">
          Lambda Eats
        </NavbarBrand>
        <div className="nav-container">
          <Nav className="nav" navbar>
            <div>
              <NavItem>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>
            </div>
            <div> 
              <NavItem>
                <NavLink href="/">
                  Help
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;