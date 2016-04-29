import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="intro"></div>
        <div className="about"></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.main'))