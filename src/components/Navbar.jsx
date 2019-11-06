import React, { Component } from "react";
import styled from "styled-components";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

const Stickydiv = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2000;
`;

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <Stickydiv>
          <MDBNavbar
            className="sticky-content"
            color="blue darken-1"
            dark
            expand="md"
          >
            <MDBNavbarBrand>
              <strong className="white-text">Webworx</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Features</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Pricing</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Stickydiv>
      </Router>
    );
  }
}

export default Navbar;
