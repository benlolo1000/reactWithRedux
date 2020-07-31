import {all} from 'redux-saga/effects';
import login from '../login/saga.js';
import home from '../userHome/saga.js';
import register from '../Register/saga.js';


function* rootSaga() {
  yield all([
    login(), 
    home(),
    register()
  ]);
}

export default rootSaga;