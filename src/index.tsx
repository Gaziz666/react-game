import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import './index.css';
import App from './components/app/App';

const store = createStore(rootReducer, JSON.parse(localStorage['redux-store']));

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
