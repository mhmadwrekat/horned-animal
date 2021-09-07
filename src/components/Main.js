import React , { Component } from 'react';
import BeastData from '../data.json' ; 
import HornedBeast from './HornedBeast.js' ; 

class Main extends Component {
    render(){
            return(
              <section class='section'>

                <div className='row'>
                {             
                    BeastData.map(num => {
                        return < HornedBeast 
                        handleOpen = {this.props.handleOpen}
                        title = {num.title}
                        imgUrl = {num.imgUrl}
                        keyword = {num.keyword}
                        horns = {num.horns}
                        description = {num.description}
                         />
                    })
                }
                </div>
                </section>

            )
        }
    }


export default Main 
