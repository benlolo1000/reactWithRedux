import * as actionTypes from './actionTypes'
import * as actions from './actions'
import React from 'react';
import * as select from './selector';
import {useSelector, useDispatch} from 'react-redux';

const Financials = props =>   {

  const home = useSelector(select.home); 
  const dispatch = useDispatch();

  console.log("HOME STATE:", home)

    return(
        <div>
            <ul>
                <li>beta: {home.financialsResults.beta} </li>
            </ul>
        </div>
    );
}

export default Financials;