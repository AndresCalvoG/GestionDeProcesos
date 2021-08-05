import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar'
import Login from './components/Login'
// import './index.css';
// import App from './App';

const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Login />
  </React.StrictMode>,
  container
);
