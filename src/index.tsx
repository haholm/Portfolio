import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <Helmet>
          <script src="https://kit.fontawesome.com/f0249aa91c.js" crossOrigin="anonymous"/>
      </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
