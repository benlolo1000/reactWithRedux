import * as actionTypes from './actionTypes'
import * as actions from './actions';
import React from 'react';
import * as select from './selector';
import {useSelector, useDispatch} from 'react-redux';

const Login = props => {

  const login = useSelector(select.login); 
  const dispatch = useDispatch();
  
  const loginInputChange = (e) => {
  e.preventDefault();
  return dispatch(actions.loginInputChange(e));
}

  if (login.loggedIn) {   
    props.changeView('user');
    return null
    }

  else { 
    return (
    <>
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={(e) => {e.preventDefault(); dispatch({type: actionTypes.LOGIN_SUBMIT})}}>
        <div className="inputContainer">
          <input onChange={loginInputChange} type="text" id="username" value={login.username} required />
          <label>Username</label>
        </div>
        <div className="inputContainer">
          <input onChange={loginInputChange} type="password" id="password" value={login.password} required />
          <label>Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
      <br/>
        <button onClick={()=> props.changeView('register')}>Register</button>
    </div>
    {login.loginError &&
      <p style={{color:'indianred', textAlign: 'center'}}>Incorrect Username or Password</p>
    }
    </>
  );
  }
};


export default Login;