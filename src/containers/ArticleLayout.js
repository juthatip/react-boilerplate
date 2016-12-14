import React , { Component } from 'react'

class ArticleLayout extends Component {
  render() {
    return (
      <div>
        <h2>Article Page</h2>
        {this.props.children}
      </div>
    );
  }
}

export default ArticleLayout