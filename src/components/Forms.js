import React, { Component } from 'react'
import { Row , 
    Form ,
    Button
} from 'react-bootstrap'
//                    <Button type="submit">Show</Button>
//                        <option value="">Choose</option>
//                    <label for="exampleFormControlSelect1"><h6>select the number of horns for your favourite beast</h6></label>

class Forms extends Component {
    render() {
        return (


            <Form style={{ width: '300px', marginLeft: '50px' }}>
                <Row className="align-items-center">
                    <Form.Select aria-label="Default select example" onClick={(e) => { this.props.handleSelectForm(e) }}>
                    <option value="">Select Number Of Horns 🦄 ....</option>
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

/*
import React, { Component } from 'react'
import BeastData from './data.json' ; 
import HornedBeast from './HornedBeast.js' ; 

import { 
    Form ,
    Button ,
    Row
} from 'react-bootstrap' ;

class Forms extends Component {

    constructor(props){
        super(props);
        this.state = {
          showModal:false ,
          imgUrl : '',
          description : '' ,
          data : BeastData ,
      }}
    handleSelectForm = (event) => {
        
        let value = event.target.value;
    
        if (value) {
          let filteredData = this.state.data.filter(Beast => {
            return (Beast.horns == value);
          })
          this.setState({ data: filteredData });
    
    
        } else {
          this.setState({ data: BeastData });
        }
      }


    render() {
        return (


            <Form style={{ width: '300px', marginLeft: '50px' }}>
                <Row className="align-items-center">
                    <label for="exampleFormControlSelect1"><h6>select the number of horns for your favourite beast</h6></label>
                    <Form.Select aria-label="Default select example" onChange={(e) => { this.handleSelectForm(e) }}>
                        <option value="1">One Horn</option>
                        <option value="2">Two Horns</option>
                        <option value="3">Three Horns</option>
                        <option value="100">One Hundred Horns</option>
                    </Form.Select>
                </Row>
            </Form>


        )
    }
}

*/

    /*    constructor(props){
        super(props);
        this.state = {
            horn : '' , 
        }
    }
    selectFunc = (event) =>{
      let horn = Number(event.target.value) ;
        if(horn === 1)
        {
      this.setState({
            horn :
                BeastData.map(num => {
                    return < HornedBeast
                    title = {num.title}
                    imgUrl = {num.imgUrl}
                    horns = {num.horns}
                     />
                })
                  })
                  //horn.filter('5');
                }
    }

    /*
      return arr.filter(Number) ;

{this.state.horn}
{this.state.imgurl}
<h1>{Number(this.state.horn)+1}</h1>
    🦄*/
/*    render() {
        return (

<div>
        <Form.Select onChange={(event) => {this.selectFunc(event)}} className="me-sm-2" id="inlineFormCustomSelect">
        <option value="">Select Number Of Horns  ....</option>
        <option value="1">1 </option>
        <option value="5">5 </option>
        <option value="2">2 </option>
        <option value="3">3 </option>
        <option value="100">100 </option>
      </Form.Select>
      <Button type="submit">Show</Button>
      <div className='row'>

      {      
      this.state.horn
      }
    
<hr></hr>            
            </div>
            </div>
        )
    }
}
*/