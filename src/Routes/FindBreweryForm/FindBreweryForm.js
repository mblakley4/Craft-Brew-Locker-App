import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './FindBreweryForm.css'

export default class FindBreweryForm extends Component {
  render() {
    return (
      <div>
      <h2>Find a Brewery</h2>

      <form>
        <div className='form-section'>
          <select name="brewery-select" id="brewery-select">
            <option value="default">...</option>
            <option value="wickedBarley">Wicked Barley</option>
          </select>
          <Link to={'/AddBeerForm'}>
            <button type="submit">
              Go!
            </button>
          </Link>
        </div>
      </form>

      <h2>Can't find the Brewery?</h2>
      <Link to={'/AddBreweryForm'}>
        <button type="button">
          Add a Brewery
        </button>
      </Link>
      <Link to={'/BeerListPage'}>
        <button type="button">
          Cancel
        </button>
      </Link>
      </div>
    );
  }
}
