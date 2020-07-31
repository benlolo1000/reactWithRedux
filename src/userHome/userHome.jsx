import * as actionTypes from '../login/actionTypes'
import * as actions from '../login/actions'
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as select from '../login/selector';

const UserHome = props =>   {


  const user = useSelector(select.user); 
  const dispatch = useDispatch();
  const userInputChange = (e) => {
    e.preventDefault();
    return dispatch(actions.userInputChange(e));
  }
  const handleLogoutClick = () => {
    dispatch({type: actionTypes.LOGIN_RESET})
    sessionStorage.setItem("apiToken", null)    
  }
  const handleUserSubmit = (e) =>{
    e.preventDefault(); 
    if(!user.city&&!user.state&&!user.specialty&&!user.drug){
      window.alert("Please fill in at least one search box")
    }else{
    dispatch({type: actionTypes.USER_SUBMIT})
    }
  }

  if (!user.loggedIn) {
    props.changeView('login');
    return (null);
  } 

  else {
   return (
    <div>
      <div className="userHome">
        <h1>Welcome</h1>
        <form onSubmit={(e) => {handleUserSubmit(e)}}>
          <div className="inputContainer">
            <input onChange={userInputChange} type="text" id="city" value={user.city} />
            <label>City</label>
          </div>
          <div className="inputContainer">
            <input onChange={userInputChange} type="text" id="state" value={user.state} />
            <label>State</label>
          </div>
          <div className="inputContainer">
            <input onChange={userInputChange} type="text" id="specialty" value={user.specialty} />
            <label>Specialty</label>
          </div>
          <div className="inputContainer">
            <input onChange={userInputChange} type="text" id="drug" value={user.drug} />
            <label>Drug</label>
          </div>
          <input type="submit" value="Search" />
          <br/>
          <br/>
          <button 
            onClick={handleLogoutClick}>
            Log Out
          </button>
          <br/>
          <br/>
          {user.searchClick?(<button onClick={()=>dispatch({type: actionTypes.SEARCH_RESET})}>Reset</button>):("")}
        </form>
        </div>
        {user.searchError &&
        <p style={{color:'indianred', textAlign: 'center'}}>Invalid Search</p>
        }
        <div>
          {
            user.searchClick ? 
              (
                user.searchSelect ? 
                  (
                    <div>
                    {
                      user.selectedResults.map((value, index) => {
                        return (
                          <div  className="userHome" key={index} onClick={() => dispatch(actions.searchDeselect())}>
                            <ul>
                            <li>First Name: {value.firstName} </li>
                            <li>Last Name: {value.lastOrgName} </li>
                            <li>City: {value.city} </li>
                            <li>State: {value.state} </li>
                            <li>specialty: {value.specialty} </li>
                            <li>Drug Name: {value.drugName} </li>
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
                {user.results.map((value, index) => { 
                  return (
                    <div  className="userHome" key={index} onClick={() => dispatch(actions.searchSelect(value.autoID))}>
                      <ul>
                      <li>First Name: {value.firstName} </li>
                      <li>Last Name: {value.lastOrgName} </li>
                      <li>City: {value.city} </li>
                      <li>State: {value.state} </li>
                      <li>specialty: {value.specialty} </li>
                      <li>Drug Name: {value.drugName} </li>
                      <li>Generic Name: {value.genericName} </li>
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
      </div>
    </div>
   );
  }
};

export default UserHome;