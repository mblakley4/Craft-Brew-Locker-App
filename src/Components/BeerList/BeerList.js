import React, { Component } from 'react'
import BeerItem from '../BeerItem/BeerItem'
import LockerContext from '../../LockerContext'

export default class BeerList extends Component {
  static contextType = LockerContext;

  static defaultProps = {
    Beers: [],
  }

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
