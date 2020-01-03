import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import STATES from '../../Services/states_US'
import LockerContext from '../../LockerContext'
import apiServices from '../../Services/apiServices'

export default class UpdateBrewery extends Component {
  static contextType = LockerContext

  state = {
    id: '',
    name: '',
    city: '',
    us_state: '',
    image: '',
    changes: false,
  }

  componentDidMount() {
    const { id, name, city, us_state, image } = this.props.location.state.brewery
    this.setState({
      id: id,
      name: name,
      city: city,
      us_state: us_state,
      image: image,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { id, name, city, us_state, image } = this.state
    const updatedBrewery = { id, name, city, us_state, image }
    apiServices.updateBrewery(updatedBrewery, id)
    .then (()  => {
      this.context.updateBrewery(updatedBrewery)
      this.props.history.push('/BeerListPage')
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleChangeName(name) {
    this.setState({name: name, changes: true})
  }

  handleChangeCity(city) {
    this.setState({city: city, changes: true})
  }

  handleChangeUSstate(us_state) {
    this.setState({us_state: us_state, changes: true})
  }

  handleChangeImage(image) {
    this.setState({image: image, changes: true})
  }

  render() {
    const { name, city, us_state, image } = this.state
    const options = STATES
      .map(
        (state, i) =>
        <option
          value={state.abbr}
          key={i}>{state.abbr}
        </option>
      )
    return (
      <div>
        <div className='add-update-Brewery-container'>
          <div className='background-container'>
          <h1>Update Brewery</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={e => this.handleChangeName(e.target.value)}
                required />

            <label htmlFor='city'>City</label>
              <input
                type='text'
                id='city'
                name='city'
                value={city}
                onChange={e => this.handleChangeCity(e.target.value)}
                required />

            <label htmlFor='state'>State</label>
              <select
                id='state'
                name='state'
                value={us_state}
                onChange={e => this.handleChangeUSstate(e.target.value)}
                required >
                <option>Select one...</option>
                {options}
              </select>

            <label htmlFor='breweryImage'>Brewery Image URL</label>
              <span>(right click the brewery logo & select 'Copy Image Address')</span>
              <input
                type='url'
                id='breweryImage'
                value={image}
                onChange={e => this.handleChangeImage(e.target.value)}
                name='breweryImage' />

              <button 
                type='submit'
                disabled={!this.state.changes}
                className={this.state.changes ? '' : 'disabled_button'}
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
        </div>
      </div>
    );
  }
}
