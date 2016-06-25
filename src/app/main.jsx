import React, {Component} from 'react';
import ReactDOM           from 'react-dom';

import HelloWorld         from './components/helloWorld/index'

class Main extends Component {
  render () {
    return(
      <div>
        <HelloWorld />
      </div>
    )
  }
}

export default function initializeApp() {
  ReactDOM.render(<Main />, document.getElementById('mainRoot'));
}
