import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MainPage from './main_page/main_page'


const Root = ({ store }) => {

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ MainPage } />
      </Router>
    </Provider>
  )
};

export default Root;
