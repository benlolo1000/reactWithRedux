import {put, takeEvery, all, call, select, delay} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionType from './actionTypes';

export function* searching() {
    const query = yield select(state => state.home);
    const response = yield fetch(("https://node-training.t1cg.codes/node/api/records?" + (query.city? ("city=" + query.city):("")) + (query.state? ("&state=" + query.state):("")) + (query.specialty? ("&specialty=" + query.specialty):("")) + (query.drug? ("&drug=" + query.drug):(""))), {
      method: "GET",
      headers: {
        "Authorization": query.token,
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
    const query = yield select(state => state.home);
    const response = yield fetch(("https://node-training.t1cg.codes/node/api/record?id=" + query.id), {
      method: "GET",
      headers: {
        "Authorization": query.token,
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

  export function* userSearch() {
    yield takeEvery(actionType.USER_SUBMIT, searching);
  }
  export function* searchSelect() {
    yield takeEvery(actionType.SEARCH_SELECT, selectingResults);
  }
  export default function* root() {
    yield all([
      call(userSearch),
      call(searchSelect)
    ]);
  };