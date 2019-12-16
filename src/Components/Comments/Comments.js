import React, { Component } from 'react'
import './Comments.css'

export default class Comments extends Component {
  render() {
    const comment = this.props
    return (
      <li className='comment'>
          <p>{comment.text}</p>
            <span className='user-name'>- {comment.userName}</span>
      </li>
    );
  }
}
