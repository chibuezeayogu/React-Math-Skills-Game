import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assests/scss/style.css';

export default ReactDOM.render(
  <App />, document.getElementById('app') || document.createElement('div')
);
