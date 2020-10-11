import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux' ;


let 초기값 = [
  { id : 0, name : '멋진신발', quan : 1, price : 25000 },
  { id : 1, name : '편한신발', quan : 1, price : 35000 }
];

function reducer(state=초기값, 액션 ){
 if (액션.type === '수량감소') {
  let copy = [...state];
  copy[액션.id].quan--;
  return copy
 } else if (액션.type === '수량증가') {
  let copy = [...state];
  copy[액션.id].quan++;
  return copy
} else {
  return state
}
}

let store = createStore(reducer);



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Provider store={store} >
        <App />
       </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
