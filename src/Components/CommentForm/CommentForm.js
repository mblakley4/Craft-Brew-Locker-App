import React, { Component } from 'react'
import LockerContext from '../../LockerContext'
import apiServices from '../../Services/apiServices'

export default class CommentForm extends Component {
  static contextType = LockerContext

  state = {
    text: {
      value: '',
      touched: false
    },
      user_name: {
        value: '',
        touched: false
      },
  }

  handleSubmit = e => {
    e.preventDefault()
    const comment = {
      beer_id: this.props.beer_id,
      text: this.state.text.value,
      user_name: this.state.user_name.value,
    }
    apiServices.postComment(comment)
    .then (comment => {
      this.context.postComment(comment)
      document.forms['comment_form'].reset();
      this.setState({
        redirect: true
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  updateText(text) {
    this.setState({text: {value: text, touched: true}})
  }

  updateUserName(user_name) {
    this.setState({user_name: {value: user_name, touched: true}})
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
        <label htmlFor="user_name" className='user_name'>User Name</label>
          <input
            type='text'
            id='use_name'
            name='user_name'
            onChange={e => this.updateUserName(e.target.value)}
            required />
        <button type='submit'>Post Comment</button>
      </form>
      </div>
    );
  }
}
