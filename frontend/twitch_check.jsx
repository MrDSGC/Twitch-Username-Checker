import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  Modal.setAppElement(root)
  ReactDOM.render(<Root store={store}/>, root);
});
