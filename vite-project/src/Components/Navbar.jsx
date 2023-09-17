import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { InputGroup } from 'react-bootstrap';
import { VscAccount } from 'react-icons/vsc';
import { Form } from 'react-bootstrap';
import Accountsdropdown from './Accountsdropdown';


function Navbarmain() {
  const[isvisible,Setisvisible]=useState(false);
  const clickbtn=()=>{
    Setisvisible(!isvisible)
  }
  return (
    <div className='navbar'>
         <Navbar  className="bg-body-tertiary" expand="lg">
      <Container fluid  className='container'>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            
            <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Default
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Nav.Link>
  <VscAccount onClick={clickbtn} style={{ color: 'black' }} size={25} />
</Nav.Link>
            {/* <Accountsdropdown/> */}     
            {isvisible && <Accountsdropdown />}
      <Nav.Link href="#link">Hustle&nbsp;World</Nav.Link>
      <Nav.Link href="#link">Report&nbsp;a&nbsp;scam</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </div>
  )
}

export default Navbarmain