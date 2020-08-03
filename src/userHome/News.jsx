import * as actionTypes from './actionTypes'
import * as actions from './actions'
import React from 'react';
import * as select from './selector';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment'

const News = props =>   {

  const home = useSelector(select.home); 
  const dispatch = useDispatch();

    return(
        <div>
            <h2 id="newsHeader">Recent News</h2>
            {home.news.map((value, index) => { 
                    return (
                        <div  className="userHome" key={index} onClick={() => dispatch(actions.searchSelect(value.autoID))}>
                        <h3>{value.headline} </h3>
                        <br/>
                        <img src={value.image} width="300px"></img>
                        <p>{moment(value.datetime*1000).format("DD MMM YYYY")}</p>
                        </div>
                    )
            })}
        </div>
    );
}

export default News;