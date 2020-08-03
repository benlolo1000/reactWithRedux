import {put, takeEvery, all, call, select, delay} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionType from './actionTypes';
import moment from 'moment';

export function* searching() {
    //retrieve params from state
    const query = yield select(state => state.home);
  
    //iniitialize finnhub/apiKey
    const finnhub = require('finnhub');
    const apiKey = finnhub.ApiClient.instance.authentications['api_key'];
    apiKey.apiKey = 'bse52uvrh5rea8raai20';

    //construct news url
    const newsUrl = 'https://finnhub.io/api/v1/company-news?symbol=' + query.ticker
    + '&from=' + moment().subtract(7,'days').format('YYYY-MM-DD')
    + '&to='+ moment().format('YYYY-MM-DD')
    +'&token='+ apiKey.apiKey

    // fetch news using newsUrl and returns body of response
    const news = yield fetch(newsUrl, { method: "GET" }).then( body => {
      return body.json() 
      })


        if (news !== null){
          yield put(actions.returnNews(news));
        } else {
          yield put(actions.userSearchFailure());
          yield delay(1500);
          yield put(actions.searchReset());
        }
    
    //construct financials url
    const financialsUrl = 'https://finnhub.io/api/v1/stock/metric?symbol=' + query.ticker
    + '&metric=all'
    + '&token='+ apiKey.apiKey

    // fetch financials using financialsUrl and returns body of response
    const financials = yield fetch(financialsUrl, { method: "GET" }).then( body => {
      return body.json() 
      })

      console.log(typeof financials.metric)

        if (financials !== null){
          yield put(actions.returnFinancials(financials.metric));
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