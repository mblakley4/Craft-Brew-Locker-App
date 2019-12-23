import React, { Component } from 'react'
import Comments from '../Comments/Comments'
import CommentForm from '../CommentForm/CommentForm'
import serviceFunctions from '../../Services/serviceFunctions'
import LockerContext from '../../LockerContext'
import './CommentList.css'

export default class CommentList extends Component {
  static contextType = LockerContext

  static defaultProps = {
    comments: []
  }

  render() {
    const allComments = this.context.Comments
    const beer_id = this.props.beer_id
    const comments = serviceFunctions.findComments(allComments, beer_id) || {}
      return (
        <section className='comment-container'>
          <h3 className='comment-title'>Comments</h3>
          <ul className='comment_list'>
            {comments.map(comment =>
              <Comments
                key={comment.id}
                {...comment}
              />)}
          </ul>

          <CommentForm beerId={beer_id} />

        </section>
      );
  }
}
