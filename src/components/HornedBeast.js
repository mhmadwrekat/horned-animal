import React , { Component } from 'react'

class HornedBeast extends Component {

    constructor(props){
        super(props);
        this.state = {
            votees : '' , 
        }
    }
    voteFunc = () =>{
                this.setState({
                    votees : Number(this.state.votees+1) 
                })
    
            }

    render(){
        
        return(
            <div>
                <h2>{ this.props.title }</h2>
                <img class='like' onClick={this.voteFunc} src={ this.props.imgUrl } width='280' height='180' ></img>
                <p>Key Word : {this.props.keyWord} </p>
                <p> Number Of Horns : {this.props.horns} </p>
                <p>Description : { this.props.description } .</p>
                <h6><img class='like' onClick={this.voteFunc} src='https://www.seekpng.com/png/detail/511-5113166_heart-instagram-like-icon-png.png' width='30' height='30'></img> {this.state.votees}</h6>
            </div>
        )
    }
}
export default HornedBeast
