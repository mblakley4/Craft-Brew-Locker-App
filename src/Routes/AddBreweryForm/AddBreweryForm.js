import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import STATES from '../../Services/states_US';
import ValidationError from '../../Components/ValidationError'
import LockerContext from '../../LockerContext'
import apiServices from '../../Services/apiServices'
import './AddBreweryForm.css';

export default class AddBreweryForm extends Component {
  static contextType = LockerContext;

  state = {
    STATES: [],
    name: {
      value: '',
      touched: false
    },
    city: {
      value: '',
      touched: false
    },
    us_state: {
      value: '',
      touched: false
    },
    image: {
      value: '',
      touched: false
    },
    error: null,
    redirect: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    const brewery = {
      name: this.state.name.value,
      city: this.state.city.value,
      us_state: this.state.us_state.value,
      image: this.state.image.value
    }
    apiServices.postBrewery(brewery)
    .then (brewery => {
      this.context.addBrewery(brewery)
      this.setState({
        redirect: true
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  validateName(fieldValue) {
    const name = this.state.name.value.trim();
    if (name.length <= 2 ) {
      return 'A name is required'
    }
  }

  validateCity(fieldValue) {
    const city = this.state.city.value.trim();
    if (city.length <= 2) {
      return 'A city is required'
    }
  }

  updateBreweryName(name) {
    this.setState({name: {value: name, touched: true}})
  }

  updateBreweryCity(city) {
    this.setState({city: {value: city, touched: true}})
  }

  updateBreweryUS_state(us_state) {
    this.setState({us_state: {value: us_state, touched: true}})
  }

  updateBreweryImage(image) {
    this.setState({image: {value: image, touched: true}})
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={'/FindBreweryForm'} />
    }
    const options = STATES
      .map(
        (state, i) => <option value={state.abbr} key={i}>{state.abbr}</option>
      )
    return (
      <div>
      <div className='add-update-Brewery-container'>
      <div className='background-container'>
      <h1>Add a Brewery</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
          <input
            type="text"
            id='name'
            name='name'
            onChange={e => this.updateBreweryName(e.target.value)}
            required />
            {this.state.name.touched && (<ValidationError message={this.validateName()}/> )}

        <label htmlFor="city">City</label>
          <input
            type="text"
            id='city'
            name='city'
            onChange={e => this.updateBreweryCity(e.target.value)}
            required />
            {this.state.city.touched && (<ValidationError message={this.validateCity()}/> )}

        <label htmlFor="state">State</label>
          <select
            id='state'
            name='state'
            onChange={e => this.updateBreweryUS_state(e.target.value)}
            required >
            <option value="None">Select one...</option>
            {options}
          </select>

        <label htmlFor='breweryImage'>Brewery Image URL</label>
          <span>(right click the brewery logo & select 'Copy Image Address')</span>
          <input
            type='url'
            id='breweryImage'
            onChange={e => this.updateBreweryImage(e.target.value)}
            name='breweryImage' />

          <button
          type='submit'
          disabled={
            this.validateName() ||
            this.validateCity()
          }
          >
            Add Brewery
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
