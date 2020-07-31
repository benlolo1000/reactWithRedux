import {put, takeEvery, all, call, select, delay} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionType from './actionTypes';

export function* loggingIn() {
  const stateUser = yield select(state => state.user);
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


export function* searching() {
  const stateUser = yield select(state => state.user);
  const response = yield fetch(("https://node-training.t1cg.codes/node/api/records?" + (stateUser.city? ("city=" + stateUser.city):("")) + (stateUser.state? ("&state=" + stateUser.state):("")) + (stateUser.specialty? ("&specialty=" + stateUser.specialty):("")) + (stateUser.drug? ("&drug=" + stateUser.drug):(""))), {
    method: "GET",
    headers: {
      "Authorization": stateUser.token,
      "Content-Type": "application/json"
    },
    credentials: "include"
  }).then(function(response) {
    return response.json() 
  })
  
  if (response.status===200){
    yield put(actions.searchSuccess(response.response));
  } else {
    yield put(actions.userSearchFailure());
    yield delay(1500);
    yield put(actions.searchReset());
  }
}

export function* selectingResults() {
  const stateUser = yield select(state => state.user);
  const response = yield fetch(("https://node-training.t1cg.codes/node/api/record?id=" + stateUser.id), {
    method: "GET",
    headers: {
      "Authorization": stateUser.token,
      "Content-Type": "application/json"
    },
    credentials: "include"
  }).then(function(response) {
    return response.json() 
  })
  
  if (response.status===200){
    yield put(actions.displaySelectedResults(response.response));
  } else {
    yield put(actions.userSearchFailure());
    yield delay(1500);
    yield put(actions.searchReset());
  }
}

export function* loginUser() {
  yield takeEvery(actionType.LOGIN_SUBMIT, loggingIn);
}
export function* userSearch() {
  yield takeEvery(actionType.USER_SUBMIT, searching);
}
export function* searchSelect() {
  yield takeEvery(actionType.SEARCH_SELECT, selectingResults);
}
export default function* root() {
  yield all([
    call(loginUser),
    call(userSearch),
    call(searchSelect)
  ]);
};