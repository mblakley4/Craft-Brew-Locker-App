import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeerData from '../../Components/BeerData/BeerData'
import CommentList from '../../Components/CommentList/CommentList'
import LockerContext from '../../LockerContext'
import Footer from '../../Components/Footer/Footer'
import './BeerPage.css'

function getCurrentBeer(Locker, beerId) {
  return Locker.filter(beer => beer.id === beerId)
}

export default class BeerPage extends Component {
  static contextType = LockerContext;
  static defaultProps = {
    Locker: []
  }


  render() {
    const Locker = this.context.Locker
    const beerId = this.props.match.params.beer_id
    const beer = getCurrentBeer(Locker, beerId)
    return (
      <div>
        <button
          onClick={ () => this.props.history.push(`/BeerListPage`)}
          className='home_button'
        >
          Home
        </button>
        <section className='hero-img'>
          Image
        </section>

        <BeerData beer={beer[0]}/>

        <CommentList comments={beer[0].comments}/>

        <Footer />
      </div>
    );
  }
}
