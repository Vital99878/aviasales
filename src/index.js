import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  //  console.log('Middleware:', store.getState());
  return result;
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, ReduxThunk)));
// const { dispatch } = store;

// const state = reducer(undefined, {});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
