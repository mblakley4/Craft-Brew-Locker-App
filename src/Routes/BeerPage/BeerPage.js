import React, { Component } from 'react'
import BeerData from '../../Components/BeerData/BeerData'
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
    console.log(beer[0]);
    return (
          <div>
            <section className='hero-img'>
              Image
            </section>

            <button>Beer List</button>

            <BeerData beer={beer[0]}/>

            <section className='comment-container'>
              <div className='comment'>
                <p>It was, I tried it at the Portland Beer Festival last week.  Definately worth the trip!</p>
                  <span className='user-name'>-Matt</span>
              </div>

              <div className='comment'>
                <p>This beer looks amazing!</p>
                  <span className='user-name'>-Mike</span>
              </div>

              <textarea
                name="comment-post"
                id="comment-post"
                cols="65"
                rows="10"
              >
              </textarea>
              <button>Post Comment</button>
            </section>
            <Footer />
          </div>
    );
  }
}
