import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "./navbar.css";
import Order from "./Order";

const showOrders = (props) => {
  let suma = 0;
  props.orders.forEach((el) => {
    suma += Number.parseFloat(el.price);
  });
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el}></Order>
      ))}
      <p className="summa">Suma: {new Intl.NumberFormat().format(suma)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Nu sunt elemente</h2>
    </div>
  );
};

const NavBar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="col-md-10 offset-md-1 mt-4 rounded cosh"
      >
        <Container>
          <Navbar.Brand href="#home">Mymazine</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleMenu}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={menuOpen ? "show" : ""}
          >
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#more">More</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
            <Form className="d-flex me-1 col-8">
              <FormControl type="text" placeholder="Search" className="me-5" />
              <Button variant="outline-success" className="me-3">
                Search
              </Button>
            </Form>
            <Button variant="outline-light" className={menuOpen ? "mt-2" : ""}>
              Login
            </Button>
            <Button
              variant="outline-light"
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`ms-3 cosh ${cartOpen && "active"}`}
            >
              <FaShoppingCart />
            </Button>
            {cartOpen && (
              <div className="shop-cart">
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className=" bg-container col-md-8 offset-md-1 mt-5 mb-5 rounded">
        <h2 className="text-center py-5">Bine ai venit la Mymazine</h2>
      </Container>
    </>
  );
};

export default NavBar;
