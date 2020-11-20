// npm packages
import React from 'react';
import ReactDOM from 'react-dom';

// local components
import App from './components/App.jsx';

let id = Number(window.location.pathname.slice(1, -1));

ReactDOM.render(
  <App id={id}/>,
  document.getElementById("app")
);
