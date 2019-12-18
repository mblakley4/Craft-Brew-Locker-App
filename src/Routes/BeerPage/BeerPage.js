import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeerData from '../../Components/BeerData/BeerData'
import CommentList from '../../Components/CommentList/CommentList'
import serviceFunctions from '../../serviceFunctions'
import LockerContext from '../../LockerContext'
import beerHops from '../../Images/hops_beer.jpg'
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
        <section className='img-container'>
          <img src={beerHops} className='hero-img' alt='beer and hops on wood plank' />
          <div className='top_button'>
            <Link to={`/UpdateBeer/${this.props.match.params.beer_id}`} >
              <button>
                Update Beer
              </button>
            </Link>

            <button
              onClick={ () => this.props.history.push(`/BeerListPage`)}
            >
              Home
            </button>
          </div>
        </section>

        <BeerData beer={beer}/>

        <CommentList beerId={beerId}/>

        <Footer />
      </div>
    );
  }
}
