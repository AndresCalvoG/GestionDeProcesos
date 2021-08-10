import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css'

import Login from './pages/Login'
import Register from './pages/Register'

const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Register />
  </React.StrictMode>,
  container
);
