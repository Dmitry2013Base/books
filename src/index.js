import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { RootReducer } from '../src/redux/RootReducer';
import thunk from 'redux-thunk';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(RootReducer, compose(applyMiddleware(thunk)))

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
