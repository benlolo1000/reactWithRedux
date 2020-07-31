import {combineReducers} from 'redux';
import user from '../login/reducer.js';
import potentialUser from '../Register/reducer.js';

const rootReducer = combineReducers({user, potentialUser});

export default rootReducer;