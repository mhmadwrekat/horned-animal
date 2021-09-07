import React , { Component } from 'react';
import BeastData from '../data.json' ; 
import HornedBeast from './HornedBeast.js' ; 

class Main extends Component {

    render(){

            return(
                <>
                <h2>Horned - Animals</h2>
                <section class='section'>
                {             
                    BeastData.map(num => {
                        return < HornedBeast 
                        title = {num.title}
                        imgUrl = {num.imgUrl}
                        keyWord = {num.keyWord}
                        horns = {num.horns}
                        description = {num.description}
                         />
                    })
                }
                </section>
                </>
            )
        }
    }


export default Main 
