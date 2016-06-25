import {combineReducers}   from 'redux';
import Immutable           from 'immutable';

import * as actions        from './actions';

const initialState = Immutable.fromJS({
  message: 'Hello World!'
});

function helloWorld (state = initialState, action) {
  switch (action.type) {
    case actions.SET_MESSAGE:
      return state.set('message', action.payload)

    default:
      return initialState
  }
};

export default helloWorld
