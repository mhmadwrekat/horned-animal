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
              className="block"
              src="https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="First slide"
              width="230"
              height="200"

            />
            <img
              className="block"
              src="https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg"
              alt="First slide"
              width="230"
              height="200"

            />
            <img
              className="block"
              src="https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt="First slide"
              width="220"
              height="200"

            />
            <img
              className="block"
              src="https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg"
              alt="First slide"
              width="225"
              height="200"
            />
            <img
              className="block"
              src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
              alt="First slide"
              width="220"
              height="200"

            />
            <img
              className="block"
              src="https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false"
              alt="First slide"
              width="220"
              height="200"

            />
            <Carousel.Caption>
              <h3>Gallery Of Horns</h3>
              <p>Pictures Of Animals With Killer Headgear</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="block"
              src="https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg"
              alt="First slide"
              width="230"
              height="200"

            />
            <img
              className="block"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg"
              alt="First slide"
              width="230"
              height="200"

            />
            <img
              className="block"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg"
              alt="First slide"
              width="225"
              height="200"
            />
            <img
              className="block"
              src="https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false"
              alt="First slide"
              width="220"
              height="200"

            />
            <img
              className="block"
              src="https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
              alt="First slide"
              width="220"
              height="200"

            />
            <img
              className="block"
              src="http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi"
              alt="First slide"
              width="220"
              height="200"

            />
            <Carousel.Caption>
              <h3>Horned Beast</h3>
              <p>Best Horns In The Animal World - The Definitive List</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
      </>
    )
  }
}
export default Header
