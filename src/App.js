import { React , Component } from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js' ; 
import Footer from './components/Footer.js' ; 
import SelectBeast from './components/SelectBeast.js' ;
import Main from './components/Main.js' ; 


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:false ,
      imgUrl : '',
      description : '',
    }
  }
  handleOpen = (imgUrl,description)=>{
    this.setState({
      showModal:true,
      imgUrl : imgUrl ,
      description : description
    })
  }
  handleClose=()=>{
    this.setState({
      showModal : false
    })
  }
  render(){
    return(
      <>
      <Header/>
  
      <Main handleOpen={this.handleOpen} />
  
      <SelectBeast handleClose={this.handleClose}
      showModal = {this.state.showModal}
      imgUrl ={this.state.imgUrl}
      description ={this.state.description}
      />
  
      <Footer/>
      </>
    )
  }
}

export default App ;
