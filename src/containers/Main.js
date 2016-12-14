import React, { Component } from 'react'
import { Link } from 'react-router'

class MainContainer extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/article">Article</Link></li>
          </ul>
        </header>
        <div className="container">
          {this.props.children}
        </div>
        <footer>Footer</footer>
      </div>
    )
  }
}



export default MainContainer
