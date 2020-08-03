import * as actionTypes from './actionTypes'
import * as actions from './actions'
import React from 'react';
import * as select from './selector';
import {useSelector, useDispatch} from 'react-redux';
import News from './News'
import Financials from './Financials'

const UserHome = props =>   {

  const home = useSelector(select.home); 
  const dispatch = useDispatch();
  
  const userInputChange = (e) => {
    e.preventDefault();
    return dispatch(actions.userInputChange(e));
  }
  const handleUserSubmit = (e) =>{
    e.preventDefault(); 
    if(!home.ticker&&!home.startDate&&!home.endDate){
      window.alert("Please fill in at least one search box")
    }else{
      dispatch({type: actionTypes.USER_SUBMIT})
    }
  }
  
  //AUTH CODE
    // const handleLogoutClick = () => {
    //   dispatch({type: actionTypes.LOGIN_RESET})
    //   sessionStorage.setItem("apiToken", null)    
    // }

  // if (!home.loggedIn) {
  //   props.changeView('login');
  //   return (null);
  // } 

  // else {

   return (
    <div>
      <div className="userHome">
        <h1>Search Company</h1>
        <form onSubmit={(e) => {handleUserSubmit(e)}}>
          <div className="inputContainer">
            <input onChange={userInputChange} type="text" id="ticker" value={home.ticker} />
            <label>Ticker</label>
          </div>
          <input type="submit" value="Search" />
          <br/>
          <br/>
          {home.searchClick?(<button onClick={()=>dispatch({type: actionTypes.SEARCH_RESET})}>Reset</button>):("")}
        </form>
        </div>
        {home.searchError &&
        <p style={{color:'indianred', textAlign: 'center'}}>Invalid Search</p>
        }

        {home.searchClick ? 
          (
            <>
          {/* <div classname="Financials"> <Financials /> </div> */}
          <div classname="News"> <News /> </div>
          </>
          ) : ("")}

        

      {/*auth*/}
      {/* <br/>
      <br/>
      <button 
        onClick={handleLogoutClick}>
        Log Out
      </button> */}
    </div> 
   );
  }

export default UserHome;