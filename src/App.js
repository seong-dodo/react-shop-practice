import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import 정보 from'./data.js';

function App() {

  let [shoes, shoes변경]= useState (정보);

  return (
    <div className="App">
        
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
         </NavDropdown>
       </Nav>
     </Navbar.Collapse>
    </Navbar>

    <Jumbotron className="background">
      <h1>20% Season OFF</h1>
      <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>

   <div className="container">
     <div className="row">
       <div className="col-md-4">
         <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
         <h4>{ shoes[0].title }</h4>
         <p>{ shoes[0].content }&{ shoes[0].price }</p>
       </div>
       <div className="col-md-4">
         <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
         <h4>{ shoes[1].title }</h4>
         <p>{ shoes[1].content }&{ shoes[1].price }</p>
       </div>
       <div className="col-md-4">
         <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
         <h4>{ shoes[2].title }</h4>
         <p>{ shoes[2].content }&{ shoes[2].price }</p>
       </div>
      </div>
    </div>



  </div>
  );
}

export default App;


