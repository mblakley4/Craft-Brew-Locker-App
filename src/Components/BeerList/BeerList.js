import React, { Component } from 'react'
import BeerItem from '../BeerItem/BeerItem'
import LockerContext from '../../LockerContext'
import './BeerList.css'

export default class BeerList extends Component {
  static contextType = LockerContext;
  static defaultProps = {
    Beers: [],
  }

  //find breweryId in the beer
  //iterate through breweries to find matching id and return the brewery

  render() {
    const { Beers } = this.context
    return (
      <>
        {Beers.map(beer =>
          <BeerItem
            key={beer.id}
            {...beer}
          />
        )}
      </>
    );
  }
}
