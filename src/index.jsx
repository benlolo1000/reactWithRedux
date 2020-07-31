import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './rootRedux/store.js';

import App from './app.jsx';

const Index = () => {

  const view = 'login'
  const changeView = () => {}
  
  return (
    <Provider store={store}>
        <App  value={view, changeView}/>
    </Provider>
  );

};

render(<Index />, document.getElementById('root'));