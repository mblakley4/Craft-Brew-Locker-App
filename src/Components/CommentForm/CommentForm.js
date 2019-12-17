import React, { Component } from 'react'
import LockerContext from '../../LockerContext'

export default class CommentForm extends Component {
  static contextType = LockerContext

  state = {
    text: {
      value: '',
      touched: false
    },
      userName: {
        value: '',
        touched: false
      },
  }

  handleSubmit = e => {
    e.preventDefault()
    const comment = {
      text: this.state.text.value,
      userName: this.state.userName.value
    }
    console.log(comment);
    this.context.postComment(comment, this.props.beerId)
    document.forms['comment_form'].reset();
  }

  updateText(text) {
    this.setState({text: {value: text, touched: true}})
  }

  updateUserName(userName) {
    this.setState({userName: {value: userName, touched: true}})
  }

  render() {
    return (
      <div>
      <form id='comment_form' onSubmit={this.handleSubmit}>
        <textarea
          name="text"
          id="text"
          cols="65"
          rows="10"
          placeholder='Leave a Comment'
          onChange={e => this.updateText(e.target.value)}
          required
        >
        </textarea>
        <label htmlFor="userName">UserName</label>
          <input
            type='text'
            id='userName'
            name='userName'
            onChange={e => this.updateUserName(e.target.value)}
            required />
        <button type='submit'>Post Comment</button>
      </form>
      </div>
    );
  }
}
