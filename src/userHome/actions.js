import * as actionType from './actionTypes';

export const userInputChange = e => ({
    type: actionType.USER_INPUT_CHANGE,
    key: e.target.id,
    value: e.target.value
  });
  
  export const userSubmit = () => ({
    type: actionType.USER_SUBMIT
  });
  
  export const returnNews = (news) => ({
    type: actionType.RETURN_NEWS,
    news:news
  });

  export const returnFinancials = (financials) => ({
    type: actionType.RETURN_FINANCIALS,
    financials:financials
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
  