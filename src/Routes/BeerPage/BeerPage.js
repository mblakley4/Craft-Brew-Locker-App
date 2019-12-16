import React, { Component } from 'react'
import BeerData from '../../Components/BeerData/BeerData'
import CommentList from '../../Components/CommentList/CommentList'
import LockerContext from '../../LockerContext'
import Footer from '../../Components/Footer/Footer'
import './BeerPage.css'

function getCurrentBeer(Beers, beerId) {
  return Beers.filter(beer => beer.id === beerId)[0]
}

export default class BeerPage extends Component {
  static contextType = LockerContext;



  render() {
    const Beers = this.context.Beers
    console.log(Beers);
    const beerId = this.props.match.params.beer_id
    const beer = getCurrentBeer(Beers, beerId)
    console.log(beer);
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

        <CommentList comments={beer.comments}/>

        <Footer />
      </div>
    );
  }
}
