import { React, Component } from 'react';
import BeastData from './components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import SelectBeast from './components/SelectBeast.js';
import Forms from './components/Forms.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      imgUrl: '',
      description: '',
      dataFilter: BeastData
    }
  }
  handleOpen = (imgUrl, description) => {
    this.setState({
      showModal: true,
      imgUrl: imgUrl,
      description: description
    })
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleSelectForm = (event) => {
    event.preventDefault();
    let value = event.target.value;
    Number(value);
    if (value) {
      let filterd = this.state.dataFilter.filter(item => {
        return Number((item.horns == value));
      })
      this.setState({ dataFilter: filterd });
    } else {
      this.setState({ dataFilter: BeastData });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Forms handleSelectForm={this.handleSelectForm} />
        <Main BeastData={this.state.dataFilter} handleOpen={this.handleOpen} />
        <SelectBeast handleClose={this.handleClose}
          showModal={this.state.showModal}
          imgUrl={this.state.imgUrl}
          description={this.state.description}
        />
        <Footer />
      </div>
    )
  }
}

export default App;