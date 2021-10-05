import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import './index.css';

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckl4vfx49inh201wgcv4vfj4q/master",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();