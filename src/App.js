import React, { Component } from 'react';
import scissors from './scissors.svg';
import rock from './rock.svg';
import paper from './paper.svg';
import './App.css';


class Option extends React.Component {
  render() {
    var config = {
      option_object: this.props.option_object,
    }; 
    const ob1 = require(`./${config.option_object}.svg`)
    const ob = config.option_object
    return (
      <button className="scissors">
        <img src={ob1} className="App-logo" alt="logo" />
        <br />
        {ob}
        {/* TODO */}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>JOKENPO BET</h2>
          <Option option_object="scissors" />
          <Option option_object="rock" />
          <Option option_object="paper" />
          <h2>choose wisely</h2>
        </div>
        <p className="App-intro">
          Simple JOKENPO game, developed by <a href="https://www.franciscomat.com">Francisco Mat</a> | Hosted by <a href="https://www.f5sites.com">F5 Sites</a>
          <br />
          <br />
          To play simple select the desired option, scissors, rock and paper
          <br />
          <br />
          For JOKENPO rules just access this website
        </p>
      </div>
    );
  }
}

export default App;
