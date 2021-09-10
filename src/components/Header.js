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
              className="inline-block w-100"
              src="https://ae01.alicdn.com/kf/HTB1F5l2QXXXXXcvXpXXq6xXFXXXg/4767-art-artwork-Dragons-fantasy-horns-Poster-Framed-Gallery-wrap-art-print-home-wall-decor-wall.jpg_Q90.jpg_.webp"
              alt="First slide"
              height='450'
            />
            <Carousel.Caption>
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
              <p>Pictures Of Animals With Killer Headgear , Best Horns In The Animal World - The Definitive List</p>
{/*<p>Antlers are a single structure composed of bone, cartilage, fibrous tissue, skin, nerves, and blood vessels .</p> */}

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
      </>
    )
  }
}
export default Header
/*

            <img
              className="inline-block w-50"
              src="https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg"
              alt="Second slide"
            />
*/
