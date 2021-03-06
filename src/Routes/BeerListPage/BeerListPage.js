import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeerList from '../../Components/BeerList/BeerList'
import Footer from '../../Components/Footer/Footer'
import Loader from '../../Services/Loader'
import LockerContext from '../../LockerContext'
import './BeerListPage.css'

export default class BeerListPage extends Component {
  static contextType = LockerContext

  setLoaded = () => {
    this.context.setLoadStatus(true)
  }

  render() {
    const loaded = this.context.loaded
    const loadSpinner = this.context.loaded
      ? <div/>
      : Loader({type: 'spinningBubbles', color: '#730C02'})

    return (
      <div>
        {loadSpinner}
        <div
          onLoad={this.setLoaded}
          className={loaded ? 'beer-list-container' : 'hidden'}
        >
            <h1>Craft Beer List</h1>

            <div className='list-links'>
              <Link to={'/FindBreweryForm'}>
                <button>
                  Add a Beer
                </button>
              </Link>

              <Link to={'/FindBreweryForm'}>
                <button
                  type="button"
                >
                  Update a Brewery
                </button>
              </Link>
            </div>

            <section className='beer-list'>
              <BeerList />
            </section>
        </div>
        <Footer />
      </div>
    );
  }
}
