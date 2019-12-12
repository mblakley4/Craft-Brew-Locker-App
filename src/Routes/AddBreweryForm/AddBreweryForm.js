import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STATES from '../../states_US';
import './AddBreweryForm.css';

export default class AddBreweryForm extends Component {

  state = {
    STATES: []
  }

  render() {
    const options = STATES
      .map(
        (state, i) => <option value={state.abbr} key={i}>{state.abbr}</option>
      )
    return (
      <div>
      <h1>Add a Brewery</h1>
      <form>
        <label htmlFor="name">Name</label>
          <input type="text" id='name' name='name' required />

        <label htmlFor="city">City</label>
          <input type="text" id='city' name='city' required />

        <label htmlFor="state">State</label>
          <select id='state' name='state'>
            <option value="None">Select one...</option>
            {options}
          </select>

        <label htmlFor='breweryImage'>Brewery Image URL</label>
          <span>(right click the brewery logo & select 'Copy Image Address')</span>
          <input type='url' id='breweryImage' name='breweryImage' />

        <Link to={'/FindBreweryForm'}>
          <button type='submit'>
            Add Brewery
          </button>
        </Link>
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
