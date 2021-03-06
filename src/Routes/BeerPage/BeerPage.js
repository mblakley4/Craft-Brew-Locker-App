import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeerData from '../../Components/BeerData/BeerData'
import CommentList from '../../Components/CommentList/CommentList'
import serviceFunctions from '../../Services/serviceFunctions'
import LockerContext from '../../LockerContext'
import Footer from '../../Components/Footer/Footer'
import './BeerPage.css'

export default class BeerPage extends Component {
  static contextType = LockerContext;
  static defaultProps = {
    match: {}
  }

  render() {
    const Beers = this.context.Beers
    const beer_id = this.props.match.params.beer_id
    const beer =
      serviceFunctions.getCurrentBeer(Beers, beer_id) || {}
    return (
      <div>
        <section className='img-container'>
          <div className='beerPageBanner' />
          <div className='top_button'>
            <button
              onClick={ () => this.props.history.push(`/BeerListPage`)}
            >
              Home
            </button>

            <Link to={`/UpdateBeer/${this.props.match.params.beer_id}`} >
              <button>
                Update Beer
              </button>
            </Link>
          </div>
        </section>

        <BeerData beer={beer}/>

        <CommentList beer_id={beer_id}/>

        <Footer />
      </div>
    );
  }
}
