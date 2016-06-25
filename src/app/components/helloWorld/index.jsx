import React, {Component}     from 'react';
import ReactDOM               from 'react-dom';
import {bindActionCreators}   from 'redux';
import {connect}              from 'react-redux';

import {getMessage}           from './accessors';
import {setMessage}           from './actions';

function mapStateToProps (state) {
  return {
    message: getMessage(state)
  }
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setMessage
  }, dispatch);
};


class HelloWorld extends Component {

  onTextChange (event) {
    this.props.setMessage(event.currentTarget.value)
  }

  render () {
    return(
      <div>
        <input
          placeholder='Enter your message'
          onChange={this.onTextChange.bind(this)} />
        <h1>{this.props.message}</h1>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
