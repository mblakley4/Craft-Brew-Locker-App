import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LockerContext from '../../LockerContext'
import './FindBreweryForm.css'

export default class FindBreweryForm extends Component {
  static contextType = LockerContext;
  static defaultProps = {
    Locker: []
  }

  render() {
    const { Locker } = this.context
    //fix:  remove duplicates; need to create breweries before advancing
    const duplicates = Locker.map(b => b.brewery.name)
    const breweries = [...new Set(duplicates)]
    console.log(breweries);

    const options =
      Locker.map((b, i) =>
        <option
          value={b.brewery.name}
          key={i}>{b.brewery.name}
        </option>
      )
    return (
      <div>
      <h2>Find a Brewery</h2>

      <form>
        <div className='form-section'>
          <select name="brewery-select" id="brewery-select">
            <option value="default">Select one...</option>
            {options}
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
