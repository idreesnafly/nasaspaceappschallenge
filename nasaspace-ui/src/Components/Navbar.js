import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";

function navbar() {
  return (
    <Navbar className="x">
      <Navbar.Brand href="#home">BOSS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
      
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default navbar;
