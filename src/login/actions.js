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

export const hasToken = (token) => ({
  type: actionType.HAS_TOKEN,
  token:token
});