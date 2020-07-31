import {put, takeEvery, all, call, select, delay} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionType from './actionTypes';

export function* registering() {
  const stateUser = yield select(state => state.potentialUser);
  const response = yield fetch("https://node-training.t1cg.codes/node/api/register", {
    method: "POST",
    body: JSON.stringify({
      "username" : stateUser.username,
      "password" : stateUser.password
    }),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }).then(function(response) {
    return response.json() //returns promise
  })

  if(response.status==200){
    yield put(actions.registerUserSuccess(stateUser));
  }
  else{
    sessionStorage.setItem("errorMessage", response.error)
    yield put(actions.registerUserFailure());
    yield delay(1500);
    yield put(actions.registerReset());
  }
 
}

export function* registerUser() {
  yield takeEvery(actionType.REGISTER_SUBMIT, registering);
}



export default function* root() {
  yield all([call(registerUser)]);
};