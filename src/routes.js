import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from './containers/Main'
import Home from './containers/Home'
import About from './containers/About'
import ArticleLayout from './containers/ArticleLayout'
import ArticleIndex from './containers/ArticleIndex'

export default () => (
  <Router history={browserHistory}>
    <Router path="/" component={Main}>
      <IndexRoute component={Home} />
      <Router path="/about" component={About}></Router>
      <Router path="/article" component={ArticleLayout}>
        <IndexRoute component={ArticleIndex} />
      </Router>
    </Router>
  </Router>
)






