import React, { Component } from 'react'
import {
    Row,
    Form,
    Button
} from 'react-bootstrap'

class Forms extends Component {
    render() {
        return (


            <Form style={{ width: '300px', marginLeft: '50px' }}>
                <Row className="align-items-center">
                    <Form.Select aria-label="Default select example" onClick={(e) => { this.props.handleSelectForm(e) }}>
                        <option value="0">Select Number Of Horns 🦄 ....</option>
                        <option value="1">1 🦄</option>
                        <option value="2">2 🦄</option>
                        <option value="3">3 🦄</option>
                        <option value="100">100 🦄</option>
                    </Form.Select>
                </Row>
            </Form>


        )
    }
}

export default Forms
