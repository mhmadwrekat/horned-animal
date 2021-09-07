import React, { Component } from 'react'
import { Modal , Button} from 'react-bootstrap' ;

export class SelectBeast extends Component {
    render() {
        return (
            <Modal
            size="lg"
            show={this.props.showModal}
            onHide={this.props.handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                  {this.props.description}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img
              src={this.props.imgUrl}
              alt="image" width='765' height='400'>
            </img>            
            </Modal.Body>
            <Modal.Footer>

              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> 
        )
    }
}

export default SelectBeast
