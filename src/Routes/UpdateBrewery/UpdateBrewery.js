import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import STATES from '../../states_US';
import LockerContext from '../../LockerContext'

export default class UpdateBrewery extends Component {
  static contextType = LockerContext

  state = {
    id: '',
    name: '',
    city: '',
    us_state: '',
    image: '',
  }

  componentDidMount() {
    //GET endpoint with breweryId
    //setState to brewery
    const { id, name, city, us_state, image } = this.props.location.state.brewery
    this.setState({
      id: id,
      name: name,
      city: city,
      us_state: us_state,
      image: image,
    })
  }

  handleChangeName = e => {
    this.setState({ name: e.target.value })
  }

  handleChangeCity = e => {
    this.setState({ city: e.target.value })
  }

  handleChangeUSstate = e => {
    this.setState({ us_state: e.target.value })
  }

  handleChangeImage = e => {
    this.setState({ image: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { id, name, city, us_state, image } = this.state
    const updatedBrewery = { id, name, city, us_state, image }
    this.context.updateBrewery(updatedBrewery)
    this.props.history.push('/BeerListPage')
  }

  render() {
    const { name, city, us_state, image } = this.state
    const options = STATES
      .map(
        (state, i) => <option value={state.abbr} key={i}>{state.abbr}</option>
      )
    return (
      <div>
      <h1>Update Brewery</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
          <input
            type="text"
            id='name'
            name='name'
            value={name}
            onChange={this.handleChangeName}
            required />

        <label htmlFor="city">City</label>
          <input
            type="text"
            id='city'
            name='city'
            value={city}
            onChange={this.handleChangeCity}
            required />

        <label htmlFor="state">State</label>
          <select
            id='state'
            name='state'
            value={us_state}
            onChange={this.handleChangeUSstate}
            required >
            <option value="None">Select one...</option>
            {options}
          </select>

        <label htmlFor='breweryImage'>Brewery Image URL</label>
          <span>(right click the brewery logo & select 'Copy Image Address')</span>
          <input
            type='url'
            id='breweryImage'
            value={image}
            onChange={this.handleChangeImage}
            name='breweryImage' />

          <button
          type='submit'

          >
            Save
          </button>

        <Link to={'/BeerListPage'}>
          <button type='button'>
            Cancel
          </button>
        </Link>
      </form>
      </div>
    );
  }
}
