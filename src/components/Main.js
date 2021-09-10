/*
import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Main
*/

import React, { Component } from 'react';
import HornedBeast from './HornedBeast.js';
import BeastData from './data.json';
import {
  Form,
} from 'react-bootstrap';

class Main extends Component {

  render() {
    return (
      <section class='section'>

        <div className='row'>
          {
            this.props.BeastData.map(num => {
              return < HornedBeast
                handleOpen={this.props.handleOpen}
                title={num.title}
                imgUrl={num.imgUrl}
                keyword={num.keyword}
                horns={num.horns}
                description={num.description}
              />
            })
          }
        </div>
      </section>
    )
  }
}


export default Main
/*
https://ae01.alicdn.com/kf/HTB1F5l2QXXXXXcvXpXXq6xXFXXXg/4767-art-artwork-Dragons-fantasy-horns-Poster-Framed-Gallery-wrap-art-print-home-wall-decor-wall.jpg_Q90.jpg_.webp
*/