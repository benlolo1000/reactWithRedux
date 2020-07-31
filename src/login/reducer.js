import * as actionType from './actionTypes';

const initialState = {

  //login logic
  username: '',
  password: '',
  loggedIn: false,
  loginError: false,
  token:null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case actionType.LOGIN_INPUT_CHANGE:
      return {
        ...state, 
        [action.key]: action.value,
      };
    case actionType.LOGIN_SUBMIT:
      return state;
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true, 
        token:action.token
      };
    case actionType.LOGIN_FAILURE:
      return {
        ...state,
        loginError: true, 
      };
    case actionType.LOGIN_RESET:
      return {
        ...state,
        username: '',
        password: '',
        loggedIn: false,
        loginError: false,
        token: null,
        city: '',
        state: '',
        specialty: '',
        drug: '',
        searchSelect:false,
        results:[],
      }
    case actionType.HAS_TOKEN:
    return {
      ...state,
      token:action.token
    }

    default:
      return state;
  }
}