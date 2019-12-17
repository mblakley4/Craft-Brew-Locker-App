import React, { Component } from 'react'
import BeerData from '../../Components/BeerData/BeerData'
import CommentList from '../../Components/CommentList/CommentList'
import serviceFunctions from '../../serviceFunctions'
import LockerContext from '../../LockerContext'
import Footer from '../../Components/Footer/Footer'
import './BeerPage.css'

export default class BeerPage extends Component {
  static contextType = LockerContext;

  render() {
    const Beers = this.context.Beers
    const beerId = this.props.match.params.beer_id
    const beer =
      serviceFunctions.getCurrentBeer(Beers, beerId)
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

        <BeerData beer={beer}/>

        <CommentList beerId={beerId}/>

        <Footer />
      </div>
    );
  }
}
