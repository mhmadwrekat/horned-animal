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
    render() {
        return (
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
        )
    }
}
export default HornedBeast
