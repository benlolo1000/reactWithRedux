import * as actionType from './actionTypes';


export const loginInputChange = e => ({
  type: actionType.LOGIN_INPUT_CHANGE,
  key: e.target.id,
  value: e.target.value
});

export const loginSubmit = () => ({
  type: actionType.LOGIN_SUBMIT
});

export const loginUserSuccess = (token) => ({
  type: actionType.LOGIN_SUCCESS,
  token:token
});

export const loginUserFailure = () => ({
  type: actionType.LOGIN_FAILURE
});

export const loginReset = () => {
  return ({
  type: actionType.LOGIN_RESET,
})};

export const userInputChange = e => ({
  type: actionType.USER_INPUT_CHANGE,
  key: e.target.id,
  value: e.target.value
});

export const userSubmit = () => ({
  type: actionType.USER_SUBMIT
});

export const searchSuccess = (response) => ({
  type: actionType.SEARCH_SUCCESS,
  response:response
});

export const userSearchFailure = () => ({
  type: actionType.SEARCH_FAILURE
});

export const searchReset = () => {
  return ({
  type: actionType.SEARCH_RESET,
})};

export const searchSelect = (id) => {
  return ({
  type: actionType.SEARCH_SELECT,
  id:id
})};

export const displaySelectedResults = (response) => {
  return ({
  type: actionType.DISPLAY_SELECTED_RESULTS,
  response:response
})};

export const searchDeselect = () => ({
  type: actionType.SEARCH_DESELECT,
});

export const hasToken = (token) => ({
  type: actionType.HAS_TOKEN,
  token:token
});