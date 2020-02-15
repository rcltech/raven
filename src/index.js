import React from 'react';
import ReactDOM from 'react-dom';
import qs from 'query-string';
import './index.css';
import App from './App';
import { redirectToLogin } from './functions/redirectToLogin';
import * as serviceWorker from './serviceWorker';

const Index = () => {
  const isIdEmpty = () => {
    const id = localStorage.getItem('id');
    return id === '' || id === null || id === undefined;
  };

  const returnedId = qs.parse(window.location.search)['id'];
  if (returnedId && returnedId.length > 0) {
    localStorage.setItem('id', returnedId);
    window.location.replace('/');
  }

  if (isIdEmpty()) {
    return redirectToLogin();
  }

  return(
    <App/>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
