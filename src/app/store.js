import {createStore, combineReducers} from "redux";
import helloWorld                     from "./components/helloWorld/reducer"

const appReducer = combineReducers({
  'hello': helloWorld
})

export default createStore(appReducer);
