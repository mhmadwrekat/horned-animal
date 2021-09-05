import React , { Component } from 'react'
import HornedBeast from './HornedBeast.js' ; 

class Main extends Component {
    render(){
        let beast = [
        {title : 'UniWhal' , description : 'A unicorn and a narwhal nuzzling their horns' , 
            imgUrl : 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' ,
            keyWord : 'narwhal' , horns : 1},

         {title : 'Rhino Family' , description : 'Mother (or father) rhino with two babies' ,
            imgUrl : 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
            keyWord : 'rhino' , horns : 2},

        {title : 'Unicorn Head' , description : 'Someone wearing a creepy unicorn head mask' ,
            imgUrl : 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
            keyWord : 'unicorn' , horns : 1}] ;
        return(
            <>
            <h2>Horned - Animals</h2>
            <section class='section'>
            {             
                beast.map(num => {
                    return < HornedBeast title = {num.title}
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
