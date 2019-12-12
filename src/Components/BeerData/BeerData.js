import React, { Component } from 'react'
import './BeerData.css'

export default class BeerData extends Component {

  render() {
    const { beer } = this.props
    return (
      <>
      <h1>{beer.name}</h1>
      <section className='beer-data'>
        <div className='left column'>
          <h2>{beer.brewery.name}</h2>
          <h4>{beer.brewery.city}, {beer.brewery.state}</h4>
            <img className='brewery-img' src={beer.brewery.image} />
        </div>

        <div className='center column'>
          <div className='glass'>
            <div className="oval"></div>
            <div className="trapezoid "></div>
            <div className="oval-bottom"></div>
          </div>
          <h3>{beer.style}</h3>
        </div>

        <div className='right column'>
          <h3>Description</h3>
          <p>{beer.description}</p>
          <div className='circle-container'>
            <div className='circle-column'>
              <div className='circle'>
                <span className='circle-text'>{beer.ABV}%</span>
              </div>
              <h4>ABV</h4>
            </div>
            <div className='circle-column'>
              <div className='circle'>
                <span className='circle-text'>{beer.IBU}</span>
              </div>
              <h4>IBU</h4>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
}
