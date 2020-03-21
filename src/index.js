import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import qs from 'query-string';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { persistCache } from 'apollo-cache-persist';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import { App } from './App';
import { redirectToLogin } from './functions/redirectToLogin';
import { Loading } from './components/shared/Loading';
import { theme } from './theme';
import * as serviceWorker from './serviceWorker';

const Index = () => {
  const [client, setClient] = useState(undefined);

  useEffect(() => {
    const authorization = localStorage.getItem('id');
    const uri =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000/graphql'
        : 'https://phoenix.rctech.club/graphql';
    const link = new HttpLink({
      uri,
      headers: {
        authorization
      }
    });

    const cache = new InMemoryCache();
    cache.writeData({
      data: {}
    });

    const client = new ApolloClient({
      cache,
      link
    });

    persistCache({
      cache,
      storage: window.sessionStorage
    }).then(() => setClient(client));
  }, []);

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

  if (!client) {
    return <Loading />;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
