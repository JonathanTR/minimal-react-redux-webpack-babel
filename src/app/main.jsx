import React, {Component}     from 'react';
import ReactDOM               from 'react-dom';
import {Provider}             from 'react-redux';

import store                  from './store'
import HelloWorld             from './components/helloWorld'

class Main extends Component {

  render () {
    return(
      <Provider store={store}>
        <div>
          <HelloWorld />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('mainRoot'));
