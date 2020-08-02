import * as actionTypes from './actionTypes'
import * as actions from './actions'
import React from 'react';
import * as select from './selector';
import {useSelector, useDispatch} from 'react-redux';
import News from './News'

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
        <h1>Welcome</h1>
        <form onSubmit={(e) => {handleUserSubmit(e)}}>
          <div className="inputContainer">
            <input onChange={userInputChange} type="text" id="ticker" value={home.ticker} />
            <label>Search By Ticker</label>
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
      <News />

      {/*auth*/}
      {/* <br/>
      <br/>
      <button 
        onClick={handleLogoutClick}>
        Log Out
      </button> */}




        {/* <div>
          {
            home.searchClick ? 
              (
                home.searchSelect ? 
                  (
                    <div>
                    {
                      home.selectedResults.map((value, index) => {
                        return (
                          <div  className="userHome" key={index} onClick={() => dispatch(actions.searchDeselect())}>
                            <ul>
                            <li>First Name: {value.firstName} </li>
                            <li>Last Name: {value.lastOrgName} </li>
                            <li>Ticker: {value.ticker} </li>
                            <li>State: {value.state} </li>
                            <li>Start Date: {value.startDate} </li>
                            <li>End Date: {value.endDate} </li>
                            <li>Active: {value.active} </li>
                            <li>beneCount: {value.genericName} </li>
                            <li>Bene Count: {value.beneCount} </li>
                            <li>Bene Count Ge 65: {value.beneCountGe65} </li>
                            <li>Bene Count Ge 65 Flag: {value.beneCountGe65Flag} </li>
                            <li>Bene Count Num: {value.beneCountNum} </li>
                            <li>Ge 65 Suppress Flag: {value.ge65SuppressFlag} </li>
                            <li>npi: {value.npi} </li>
                            <li>Total 30 Day Fill Count: {value.total30DayFillCount} </li>
                            <li>Total 30 Day Fill Count Ge 65: {value.total30DayFillCountGe65} </li>
                            <li>Total Claim Count: {value.totalClaimCount} </li>
                            <li>Total Claim Count Ge 65: {value.totalClaimCountGe65} </li>
                            <li>Total Claim Count Num: {value.totalClaimCountNum} </li>
                            <li>Total Day Supply: {value.totalDaySupply} </li>
                            <li>Total Day Supply Ge 65: {value.totalDaySupplyGe65} </li>
                            <li>Total Drug Cost: {value.totalDrugCost} </li>
                            <li>Total Drug Cost Num: {value.totalDrugCostNum} </li>
                            <li>Total Drug cost Ge 65: {value.totalDrugcostGe65} </li>
                            </ul>
                          </div>
                        )
                      }
                    )
                  }
                </div>
              )
              :
              (
                <div>
                {home.results.map((value, index) => { 
                  return (
                    <div  className="userHome" key={index} onClick={() => dispatch(actions.searchSelect(value.autoID))}>
                      <ul>
                      <li>Ticker: {value.ticker} </li>
                      <li>Start Date: {value.startDate} </li>
                      <li>endDate: {value.endDate} </li>
                      </ul>
                    </div>
                    )})}
                </div>
              )
            )
            :
            (
              <div  className="userHome" >
              <p id = "preSearchText">search results will appear here</p>
              </div>
            ) 
          }
      </div>*/}
    </div> 
   );
  }

export default UserHome;