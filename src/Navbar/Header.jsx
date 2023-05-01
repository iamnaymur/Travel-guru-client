import React from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import brandLogo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar
        className="container d-flex justify-content-around"
        bg="light"
        expand="lg"
      >
        <div>
          <img style={{ height: "70px" }} src={brandLogo} alt="" />
        </div>
        <div>
          <Form className="d-flex">
            <Form.Control
              style={{width:'370px'}}
              type="search"
              placeholder="Search your destination..."
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </div>
        <div>
          <NavLink className="p-4">News</NavLink>
          <NavLink className="p-4">Destination</NavLink>
          <NavLink className="p-4">Blog</NavLink>
          <NavLink className="p-4">Contact</NavLink>
        </div>
        <div>
          <Button variant="outline-success">Login</Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
