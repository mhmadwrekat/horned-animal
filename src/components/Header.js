import React , { Component } from 'react'
import { Navbar , Nav , NavDropdown , Form , FormControl , Button } from 'react-bootstrap' ;

class Header extends Component {
    render(){
        return(
            <>
<Navbar bg="dark" expand="lg" variant="dark">
 <pre>        </pre>
  <Navbar.Brand href="#">Gallery Of Horns</Navbar.Brand>
  <pre>     </pre>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  <Nav.Link href="#action1">Home</Nav.Link>
  <pre>        </pre>
</Navbar>
            </>
        )
    }
}
export default Header
