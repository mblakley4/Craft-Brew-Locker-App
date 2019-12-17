import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LockerContext from '../../LockerContext'
import serviceFunctions from '../../serviceFunctions'
import './BeerItem.css'

export default class BeerItem extends Component {
  static contextType = LockerContext

  render() {
    const breweryId = this.props.breweryId
    const brewery =
      serviceFunctions.findBrewery(this.context.Breweries, breweryId)
    return (

      <Link
        to={`/BeerPage/${this.props.id}`}
        className='BeerPage_Link'
      >
        <div className='beer-tile' key={this.props.id}>
          <h2 className='beer-name'>{this.props.name}</h2>
          <h3 className='brewery-name'>{brewery.name}</h3>
        </div>
      </Link>

    );
  }
}
