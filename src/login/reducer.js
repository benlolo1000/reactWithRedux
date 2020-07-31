import * as actionType from './actionTypes';

const initialState = {

  //login logic
  username: '',
  password: '',
  loggedIn: false,
  loginError: false,
  token:null,

  //input search logic
  id: '',
  firstName: '',
  lastName: '',
  city: '',
  state: '',
  specialty: '',
  drug: '',
  searchError: false, 
  searchClick:false,
  
  //search results logic
  results:[],
  selectedResults:[],
  searchSelect:false,
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

    case actionType.USER_INPUT_CHANGE:
      return {
        ...state, 
        [action.key]: action.value,
      };
    case actionType.USER_SUBMIT:
      return {
        ...state,
        searchClick:true,
      }
    case actionType.SEARCH_SUCCESS:
      return {
        ...state,
        searchSelect:false,
        results:action.response,
        selectedResults:[]
      };
    case actionType.SEARCH_FAILURE:
      return {
        ...state,
        searchError: true, 
      };
    case actionType.SEARCH_RESET:
      return {
        ...state,
        id: '',
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        specialty: '',
        drug: '',
        searchError: false, 
        searchClick:false,
        
        results:[],
        selectedResults:[],
        searchSelect:false,
      }
    case actionType.SEARCH_SELECT:
      return {
        ...state,
        id: action.id,
        searchSelect:!state.searchSelect,
       
      };
      case actionType.SEARCH_DESELECT:
        return {
          ...state,
          selectedResults:[],
          searchSelect:!state.searchSelect
        };
    case actionType.DISPLAY_SELECTED_RESULTS:
      return {
        ...state,
        selectedResults:action.response, 
      };
        
    case actionType.HAS_TOKEN:
    return {
      ...state,
      token:action.token
    }

    default:
      return state;
  }
}