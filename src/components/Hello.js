import React , { Component } from 'react'
import style from './Hello.scss'
import axios from 'axios'

class Hello extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/db`)
     .then(res => {
       const posts = res.data.jobs.map(obj => obj);
       this.setState({ posts })
     });
  }
  render() {
    return (
      <div>
        <h1 className={style.title}>Hello Starter !!</h1>
        {this.state.posts.map((post, i)=> {
            return (
              <div className={style.list} key={i}>
                <a className={style.link} href={post.url}> {post.company_name}</a>
                <p> {post.title} <span>- {post.term}</span></p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Hello
