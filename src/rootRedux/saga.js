import {all} from 'redux-saga/effects';
import user from '../login/saga.js';
import potentialUser from '../Register/saga.js';

function* rootSaga() {
  yield all([
    user(), 
    potentialUser()
  ]);
}

export default rootSaga;