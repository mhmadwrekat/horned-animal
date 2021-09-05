import React , { Component } from 'react'

class HornedBeast extends Component {
    render(){
        return(
            <div>
                <h2>{ this.props.title }</h2>
                <img src={ this.props.imgUrl } width='280' height='180' ></img>
                <p>Key Word : {this.props.keyWord} </p>
                <p> Number Of Horns : {this.props.horns} </p>
                <p>Description : { this.props.description } .</p>
            </div>
        )
    }
}
export default HornedBeast
