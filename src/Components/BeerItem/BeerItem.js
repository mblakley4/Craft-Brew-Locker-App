import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BeerItem.css'

export default class BeerItem extends Component {

  render() {
    return (

      <Link
        to={`/BeerPage/${this.props.id}`}
        className='BeerPage_Link'
      >
        <div className='beer-tile' key={this.props.id}>
          <h2 className='beer-name'>{this.props.name}</h2>
          <h3 className='brewery-name'>{this.props.brewery.name}</h3>
        </div>
      </Link>

    );
  }
}
