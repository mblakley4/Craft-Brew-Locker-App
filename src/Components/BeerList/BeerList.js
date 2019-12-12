import React, { Component } from 'react'
import BeerItem from '../BeerItem/BeerItem'
import LockerContext from '../../LockerContext'
import './BeerList.css'

export default class BeerList extends Component {
  static contextType = LockerContext;
  static defaultProps = {
    Locker: []
  }

  render() {
    const { Locker } = this.context
    console.log(Locker);
    return (
      <>
        {Locker.map(beer =>
          <BeerItem
            key={beer.id}
            {...beer}
          />
        )}
      </>
    );
  }
}
