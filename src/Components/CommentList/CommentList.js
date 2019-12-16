import React, { Component } from 'react'
import Comments from '../Comments/Comments'
import './CommentList.css'

export default class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    const { comments } = this.props
    console.log(comments);
    if (!comments) {
      return (
        <div />
      )
    }
    else {
      return (
        <section className='comment-container'>
          <h3>Comments</h3>
          <ul className='comment_list'>
            {comments.map(comment =>
              <Comments
                key={comment.id}
                {...comment}
              />)}
          </ul>

          <textarea
            name="comment-post"
            id="comment-post"
            cols="65"
            rows="10"
          >
          </textarea>
          <button>Post Comment</button>
        </section>
      );
    }
  }
}
