import {put, takeEvery, all, call, select, delay} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionType from './actionTypes';

export function* searching() {

    // creates url using apiKey and params
    const query = yield select(state => state.home);
    const finnhub = require('finnhub');
    const apiKey = finnhub.ApiClient.instance.authentications['api_key'];
    apiKey.apiKey = 'bse52uvrh5rea8raai20';
    const url = 'https://finnhub.io/api/v1/company-news?symbol=' + query.ticker
    + '&from=' + query.startDate 
    + '&to='+ query.endDate 
    +'&token='+ apiKey.apiKey

    // fetches data using url and returns body of response
    const data = yield fetch(url, { method: "GET" }).then( body => {
      return body.json() 
      })
      console.log(data)

        if (data !== null){
          console.log("data being sent to searchSuccess:", data)
          yield put(actions.searchSuccess(data));
        } else {
          yield put(actions.userSearchFailure());
          yield delay(1500);
          yield put(actions.searchReset());
        }

    // const response = yield fetch(("https://node-training.t1cg.codes/node/api/records?" 
    //         + (query.city? ("city=" + query.city):(""))
    //         + (query.state? ("&state=" + query.state):("")) 
    //         + (query.specialty? ("&specialty=" + query.specialty):("")) 
    //         + (query.drug? ("&drug=" + query.drug):(""))
    //       ), {
    //   method: "GET",
    //   headers: {
    //     "Authorization": query.token,
    //     "Content-Type": "application/json"
    //   },
    //   credentials: "include"
    // }).then(function(response) {
    //   return response.json() 
    // })
    
    // if (response.status===200){
    //   yield put(actions.searchSuccess(response.response));
    // } else {
    //   yield put(actions.userSearchFailure());
    //   yield delay(1500);
    //   yield put(actions.searchReset());
    // }

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