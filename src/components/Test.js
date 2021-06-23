import React from 'react'
import { Navbar,Nav,Container } from "react-bootstrap";
const test = () => {
    return (
        <div>
            <Navbar className="margin" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> Jihed
        </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default test