import * as actionType from './actionTypes';

const initialState = {
  //input search logic
  ticker: 'AAPL',
  startDate: '2020-07-10',
  endDate: '2020-07-20',
  
  //search results logic
  searchError: false, 
  searchClick:false,
  news:[],
  financialsResults:{},
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
      case actionType.RETURN_NEWS:
        return {
          ...state,
          searchSelect:false,
          news:action.news,
          selectedResults:[]
        };
      case actionType.RETURN_FINANCIALS:
        return {
          ...state,
          searchSelect:false,
          financialsResults:action.financials,
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
          ticker: '',
          startDate: '',
          endDate: '',
          searchError: false, 
          searchClick:false,
          
          news:[],
          financialsResults:{},
          selectedResults:[],
          searchSelect:false,
        }
      case actionType.SEARCH_SELECT:
        return {
          ...state,
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
          
  