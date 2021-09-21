import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { store } from './dashboard/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
