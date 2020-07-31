import * as actionType from './actionTypes';


export const registerInputChange = e => ({
  type: actionType.REGISTER_INPUT_CHANGE,
  key: e.target.id,
  value: e.target.value
});

export const registerSubmit = () => ({
  type: actionType.REGISTER_SUBMIT
});

export const registerUserSuccess = (login) => ({
  type: actionType.REGISTER_SUCCESS,
  login:login
});

export const registerUserFailure = () => ({
  type: actionType.REGISTER_FAILURE
});

export const registerReset = () => {
  return ({
  type: actionType.REGISTER_RESET
})};

