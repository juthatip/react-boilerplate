import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import getRouter from './routes'

ReactDOM.render(
  getRouter(),
  document.getElementById('container')
);
