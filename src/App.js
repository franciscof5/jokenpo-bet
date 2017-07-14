import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
/*import scissors from './scissors.svg';
import rock from './rock.svg';
import paper from './paper.svg';*/
import { FormControl,Button,Modal,ModalHeader,ModalTitle,ModalBody,ModalFooter,Popover,Tooltip,OverlayTrigger,mountNode } from 'react-bootstrap';
import './App.css';
import Timer from 'react-timer'

/*class IntroModal extends Modal {
  retun (
    <Modal
  isOpen={bool}
  onAfterOpen={afterOpenFn}
  onRequestClose={requestCloseFn}
  closeTimeoutMS={n}
  shouldCloseOnOverlayClick={false}
  style={customStyle}
  contentLabel="No Overlay Click Modal"
>

  <h1>Force Modal</h1>
  <p>Modal cannot be closed when clicking the overlay area</p>
  <button onClick={handleCloseFunc}>Close Modal...</button>
</Modal>
  )
}*/

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

class TimerProjectimer extends Component {
  const OPTIONS = { prefix: 'seconds elapsed!', delay: 100}
  render () {
    return (
      <div>
        <Timer options={OPTIONS} />
      </div>
    )
  }
}

class ScoreBoard extends Component {
  render() {
    var config = {
      total:1000,
      stack:100,
      betted:0,
      secondsPassed:0
    }
    return (
      <div>
        <form>
          <FormControl
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter text"
          />
        </form>
        <input type="text" />
        <Button bsStyle="primary" bsSize="large">BET!</Button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <div className="App-header">
          <h2>JOKENPO BET</h2>
          <TimerProjectimer />
          <Option option_object="scissors" />
          <Option option_object="rock" />
          <Option option_object="paper" />
          <ScoreBoard />
          <h2>choose wisely</h2>
        </div>
        <p className="App-intro">
          Simple JOKENPO game, developed by <a href="https://www.franciscomat.com">Francisco Mat</a> | Hosted by <a href="https://www.f5sites.com">F5 Sites</a>
          <br />
          <br />
          To play simple select the desired option, scissors, rock and paper
          <br />
          <IntroModal />
          
        </p>
      </div>
    );
  }
}

const IntroModal = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Detailed Instructions
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

//ReactDOM.render(<IntroModal />, mountNode);

export default App;
