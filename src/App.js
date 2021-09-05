import { React , Component } from 'react' ;
import Header from './components/Header.js' ; 
import Footer from './components/Footer.js' ; 
import Main from './components/Main.js' ; 


class App extends Component {
  render(){
    return(
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  }
}

export default App ;
