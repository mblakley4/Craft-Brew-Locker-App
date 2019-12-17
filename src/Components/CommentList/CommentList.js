import React, { Component } from 'react'
import Comments from '../Comments/Comments'
import CommentForm from '../CommentForm/CommentForm'
import serviceFunctions from '../../serviceFunctions'
import LockerContext from '../../LockerContext'
import './CommentList.css'

export default class CommentList extends Component {
  static contextType = LockerContext

  static defaultProps = {
    comments: []
  }

  render() {
    const allComments = this.context.Comments
    const beerId = this.props.beerId
    const comments = serviceFunctions.findComments(allComments, beerId)
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

          <CommentForm beerId={beerId} />

        </section>
      );
  }
}
