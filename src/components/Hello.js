import React , { Component } from 'react'
import style from './Hello.scss'

class Hello extends Component {
  render() {
    return (
      <h1 className={style.title}>Hello</h1>
    )
  }
}

export default Hello
