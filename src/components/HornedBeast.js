import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap';


class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: '',
        }
    }

    voteFunc = () => {
        this.setState({
            votes: Number(this.state.votes + 1)
        })
    }
    getHandleOpen = () => {
        let imgUrl = this.props.imgUrl;
        let description = this.props.description;
        this.props.handleOpen(imgUrl, description);
    }
    /*
[
  'Primary',
  'Secondary',
  'Success',
  'Danger',
  'Warning',
  'Info',
  'Light',
  'Dark',
].map((variant, idx) => (
  <Card
    bg={variant.toLowerCase()}
    key={idx}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{variant} Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
));
    */

    render() {
        return (
        
                <Col>
                <Card
                  bg={'dark'}
                  text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: '18rem' }}
                  className="mb-2"
                >
                  <Card.Header>{this.props.title}</Card.Header>
                  <Card.Body>
                  <Card.Img onClick={this.getHandleOpen} variant='top' src={this.props.imgUrl} height='200' />
                  <Card.Title>{this.props.keyword}</Card.Title>
                  </Card.Body>
                  <Card.Footer className="mb-2">
                    <p>🦄{this.props.horns}</p>
                        <p class='pVote' onClick={this.voteFunc}>❤️{this.state.votes}</p>
                    </Card.Footer>
                </Card>
                <br></br>
                </Col>
              )
        
    }
}
export default HornedBeast
/*
            <Col>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Body>
                        <Card.Img onClick={this.getHandleOpen} variant='top' src={this.props.imgUrl} height='200' />
                        <Card.Title>{this.props.keyword}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <p>🦄{this.props.horns}</p>
                        <p class='pVote' onClick={this.voteFunc}>❤️{this.state.votes}</p>
                    </Card.Footer>
                </Card>
                <br></br>
            </Col>
*/