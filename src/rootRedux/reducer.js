import {combineReducers} from 'redux';
import login from '../login/reducer.js';
import register from '../Register/reducer.js';
import home from '../userHome/reducer.js'

const rootReducer = combineReducers({login, home, register});

export default rootReducer;