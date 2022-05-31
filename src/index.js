import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import GlobalStyle from './styleComponents/GlobalStyle';



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

