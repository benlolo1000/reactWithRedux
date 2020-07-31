import * as actions from './actions';
import * as actionType from './actionTypes'
import React from 'react';
import * as select from './selector';
import {useSelector, useDispatch} from 'react-redux';




const Register = props =>{
    const potentialUser = useSelector(select.potentialUser);
    const dispatch = useDispatch();
    const registerInputChange = (e) => {
            e.preventDefault();
            return dispatch(actions.registerInputChange(e));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type: actionType.REGISTER_SUBMIT})
    }

    if (potentialUser.loggedIn) {
        props.changeView('user');
        return (null);
      }
      else return (
        <>
        <div className="register">
            <h1>Register</h1>
            <form>
                <div className="inputContainer">
                    <input value={potentialUser.username} onChange={registerInputChange} type="text" id="username" required/>
                    <label>Username</label>
                </div>
                <div className="inputContainer">
                    <input value={potentialUser.password} onChange={registerInputChange} type="password" id="password" required />
                    <label>Password</label>
                </div>
                <input onClick={handleSubmit} type="submit" value="Create Account"/>
                <br/>
                <button onClick={()=> props.changeView('login')}>Return to Login</button>
            </form>
        </div>
        {potentialUser.loginError &&
      <p style={{color:'indianred', textAlign: 'center'}}>{sessionStorage.getItem("errorMessage")}</p>
    }
        </>
    )
}

export default Register