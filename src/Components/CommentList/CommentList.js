import React, { Component } from 'react'
import Comments from '../Comments/Comments'
import CommentForm from '../CommentForm/CommentForm'
import './CommentList.css'

export default class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    const { comments } = this.props
    console.log(comments);
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

          <CommentForm beerId={this.props.beerId} />

        </section>
      );
  }
}
