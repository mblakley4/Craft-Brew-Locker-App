import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import serviceFunctions from '../../Services/serviceFunctions'
import LockerContext from '../../LockerContext'
import './BeerItem.css'

export default class BeerItem extends Component {
  static contextType = LockerContext

  componentDidMount () {
    setTimeout(() =>
      this.context.setLoadStatus(true),
      3000
    )
  }

  render() {
    const brewery_id = this.props.brewery_id
    const brewery =
      serviceFunctions.findBrewery(this.context.Breweries, brewery_id) || {}
    return (

      <Link
        to={`/BeerPage/${this.props.id}`}
        className='BeerPage_Link'
      >
        <div className='beer-tile' key={this.props.id}>
          <h2 className='beer-name'>{this.props.name}</h2>
          <img
            className='brewery-img-item'
            src={brewery.image}
            alt='brewery logo'
          />
          <h3 className='brewery-name'>{brewery.name}</h3>
          <div className='rating-container'>
            <Rating value={this.props.rating} />
          </div>
        </div>
      </Link>
    );
  }
}
