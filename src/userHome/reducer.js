import * as actionType from './actionTypes';

const initialState = {
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

    default:
        return state;
    }
  }
          
  