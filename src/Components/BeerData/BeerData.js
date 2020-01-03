import React, { Component } from 'react'
import LockerContext from '../../LockerContext'
import serviceFunctions from '../../Services/serviceFunctions'
import Rating from '../Rating/Rating'
import hopsGlass from '../../Images/hopsGlass.png'
import './BeerData.css'

export default class BeerData extends Component {
  static contextType = LockerContext

  static defaultProps = {
    beer: [],
    beer_color: '#BE823A'
  }

  render() {
    const { beer } = this.props || {}
    const brewery_id = beer.brewery_id
    const brewery =
      serviceFunctions.findBrewery(this.context.Breweries, brewery_id) || {}
      return (
        <div className='beer-data-container'>
        <h1 className='beerName-title'>{beer.name}</h1>
        <section className='beer-data'>
          <div className='left column'>
            <h2>{brewery.name}</h2>
            <h4>{brewery.city}, {brewery.us_state}</h4>
            <img className='brewery-img' src={brewery.image} alt='brewery logo' />
          </div>

          <div className='center column'>
            <img src={hopsGlass} alt='glass with hops and barley' className='hopsGlass'/>
            <h3>{beer.style}</h3>
          </div>

          <div className='right column'>
            <h3>Description</h3>
            <p>{beer.description}</p>
            <div className='circle-container'>
              <div className='circle-column'>
                <div className='circle'>
                  <span className='circle-text'>{beer.abv}%</span>
                </div>
                <h4>ABV</h4>
              </div>
              <div className='circle-column'>
                <div className='circle'>
                  <span className='circle-text'>{beer.ibu}</span>
                </div>
                <h4>IBU</h4>
              </div>
            </div>
            <div className='glass'>
              <div
                className="oval"
                style={{'backgroundColor': beer.beer_color || this.props.beer_color}}>
              </div>
              <div
              className="trapezoid "
              style={{'borderTop': `100px solid ${beer.beer_color || this.props.beer_color}`}}></div>
              <div
              className="oval-bottom"
              style={{'backgroundColor': beer.beer_color || this.props.beer_color}}>
              </div>
            </div>
            <Rating className='rating-data' value={beer.rating} />
          </div>
        </section>
        </div>
      );
  }
}
