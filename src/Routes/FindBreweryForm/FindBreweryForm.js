import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import LockerContext from '../../LockerContext'
import  serviceFunctions from '../../Services/serviceFunctions'
import './FindBreweryForm.css'

export default class FindBreweryForm extends Component {
  static contextType = LockerContext;
  static defaultProps = {
    Locker: []
  }

  state = {
    brewery: {},
    touched: false,
    redirect: 0,
    formLoaded: false
  }

  setLoaded = () => {
    this.setState({
      formLoaded: true
    })
  }

  updateBrewery(id) {
    const selectedBrewery = serviceFunctions.findBrewery(this.context.Breweries, id)
    this.setState({brewery: selectedBrewery, touched: true})
  }

  updateRedirctAdd() {
    this.setState({redirect: 1})
  }

  updateRedirctUpdate() {
    this.setState({redirect: 2})
  }

  render() {
    if (this.state.redirect === 1) {
      return <Redirect to={{
        pathname: '/AddBeerForm',
        state: { brewery: this.state.brewery }
      }} />
    }
    if (this.state.redirect === 2) {
      return <Redirect to={{
        pathname: `/UpdateBrewery/${this.state.brewery.id}`,
        state: { brewery: this.state.brewery }
      }} />
    }
    const breweries  = this.context.Breweries
    // TODO: add feature to sort list alphabetically
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
      <div className='findBrewery-container'>
      <div className='white-container'>
        <h2 className='findBrewery-title'>Find a Brewery</h2>
        <form>
          <div className='select-container'>
            <select
              name="brewery-select"
              onChange={e => this.updateBrewery(e.target.value)}
            >
              <option value="default">Select one...</option>
              {options}
            </select>
          </div>
            <button
              type="submit"
              disabled={!this.state.touched}
              className={this.state.touched ? '' : 'disabled_button'}
              onClick={e => this.updateRedirctAdd()}
            >
              Add Beer
            </button>
            <button
              type="submit"
              disabled={!this.state.touched}
              onClick={e => this.updateRedirctUpdate()}
            >
              Update
            </button>
        </form>

        <h2>Can't find the Brewery?</h2>
        <Link to={'/AddBreweryForm'}>
          <button type="button">
            Add Brewery
          </button>
        </Link>

        <Link to={'/BeerListPage'}>
          <button type="button">
            Cancel
          </button>
        </Link>
      </div>
      </div>
    );
  }
}
