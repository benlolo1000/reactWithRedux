import {put, takeEvery, all, call, select, delay} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionType from './actionTypes';

export function* loggingIn() {
  const stateUser = yield select(state => state.login);
  const response = yield fetch("https://node-training.t1cg.codes/node/api/login", {
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
      return response.json() 
    })
  
  if (response.status==200){
    yield put(actions.loginUserSuccess(response.response));
    sessionStorage.setItem("apiToken", response.response)
  } else {
    yield put(actions.loginUserFailure());
    yield delay(1500);
    yield put(actions.loginReset());
  }
}

export function* loginUser() {
  yield takeEvery(actionType.LOGIN_SUBMIT, loggingIn);
}

export default function* root() {
  yield all([
    call(loginUser)
  ]);
};