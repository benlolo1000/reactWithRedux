import * as actionTypes from './login/actionTypes'
import * as actions from './login/actions'
import Login from './login/login.jsx';
import React, { useState, useEffect } from 'react';
import Register from './Register/Register.jsx';
import UserHome from './userHome/userHome.jsx';
import { useDispatch } from 'react-redux';

const App = () => {
  

  const [view, setView] = useState('view')
  const changeView = view => { setView(view) }
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("apiToken")

  //START AUTH CODE
  // useEffect(() => {
  //   if(token !== null&&token!=="null"){
  //     dispatch({type: actionTypes.LOGIN_SUCCESS})
  //     dispatch(actions.hasToken(token))
  //   }s
  // }, []);

  // if(view === 'user'){
  //   return (<UserHome changeView={changeView}/>)
  // }
  
  // if(view ==='login'){
  //   return (<Login changeView={changeView} />) 
  // }
  
  // if(view === 'register'){
  //   return (<Register changeView={changeView} />)
  // }
  //END AUTH CODE

    return (<UserHome changeView={changeView} />)
}    

export default App;