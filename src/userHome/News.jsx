import * as actionTypes from './actionTypes'
import * as actions from './actions'
import React from 'react';
import * as select from './selector';
import {useSelector, useDispatch} from 'react-redux';

const News = props =>   {

  const home = useSelector(select.home); 
  const dispatch = useDispatch();

    return(
        <div>
            {home.results.map((value, index) => { 
                    return (
                        <div  className="userHome" key={index} onClick={() => dispatch(actions.searchSelect(value.autoID))}>
                        <ul>
                        <li>Headline: {value.headline} </li>
                        </ul>
                        </div>
                    )
            })}
        </div>

    );
}

export default News;