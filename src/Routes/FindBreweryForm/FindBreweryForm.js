import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import LockerContext from '../../LockerContext'
import './FindBreweryForm.css'

function getBrewery(Breweries, id) {
  return Breweries.filter(brewery => brewery.id == id)[0]
}

export default class FindBreweryForm extends Component {
  static contextType = LockerContext;
  static defaultProps = {
    Locker: []
  }

  state = {
    brewery: {},
    touched: false,
    redirect: false
  }

  handleSubmit = e => {
    e.preventDefault()
    const brewery = this.state.brewery
    this.setState({
      redirect: true
    })
  }

  updateBrewery(id) {
    const selectedBrewery = getBrewery(this.context.Breweries, id)
    this.setState({brewery: selectedBrewery, touched: true})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/AddBeerForm',
        state: { brewery: this.state.brewery }
      }} />
    }
    const breweries  = this.context.Breweries
    // const breweryList = breweries.map((b, i) => b.name).sort()
    const options = breweries.map((b, i) =>
      <option
        key={i}
        value={b.id}
        id={b.id}
      >
      {b.name}
      </option>
    )

    return (
      <div>
      <h2>Find a Brewery</h2>

      <form onSubmit={this.handleSubmit}>
        <div className='form-section'>
          <select
            name="brewery-select"
            onChange={e => this.updateBrewery(e.target.value)}
          >
            <option value="default">Select one...</option>
            {options}
          </select>
            <button
              type="submit"
              disabled={!this.state.touched}
            >
              Go!
            </button>
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
