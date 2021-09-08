import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  Carousel
} from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg" variant="dark">
          <pre>        </pre>
          <Navbar.Brand href="#">Gallery Of Horns</Navbar.Brand>
          <pre>     </pre>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form>
              <Row className="align-items-center">
                <Col xs="auto" className="my-1">
                  <Form.Label
                    className="me-sm-2"
                    htmlFor="inlineFormCustomSelect"
                    visuallyHidden
                  >
                    Preference
                  </Form.Label>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
          <Nav.Link href="#action1">Home</Nav.Link>
          <pre>        </pre>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <img
              className="inline-block w-50"
              src="https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="First slide"
            />
            <img
              className="inline-block w-50"
              src="https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3><b>Horned Beast Gallery</b></h3>
              <p>Pictures Of Animals With Killer Headgear , Best Horns In The Animal World - The Definitive List</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="inline-block w-50"
              src="https://p1.pxfuel.com/preview/285/303/813/mouflon-wild-sheep-horns-imposing-portrait-horned.jpg"
              alt="First slide"
            />
            <img
              className="inline-block w-50"
              src="https://rurallivingtoday.com/wp-content/uploads/animals-with-horns-2.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><b>Horned Beast Gallery</b></h3>
              <p>Antlers are a single structure composed of bone, cartilage, fibrous tissue, skin, nerves, and blood vessels .</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
      </>
    )
  }
}
export default Header

