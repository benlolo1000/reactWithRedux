import * as actionType from './actionTypes';

const initialState = {
  password: '',
  username: '',
  address: '',
  DOB: '',
  loggedIn: false,
  loginError: false,
  clicked: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case actionType.REGISTER_INPUT_CHANGE:
      return {
        ...state, 
        [action.key]: action.value,
      };
    case actionType.REGISTER_SUBMIT:
      return state;
    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: true, DOB: action.login.DOB, address: action.login.address
      };
    case actionType.REGISTER_FAILURE:
      return {
        ...state,
        loginError: true, 
      };
    case actionType.REGISTER_RESET:
      return initialState;
    default:
      return state;

  }
}