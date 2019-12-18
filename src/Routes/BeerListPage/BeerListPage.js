import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeerList from '../../Components/BeerList/BeerList'
import Footer from '../../Components/Footer/Footer'
import './BeerListPage.css'

export default class BeerListPage extends Component {
  render() {
    return (
      <div>
      <div className='beer-list-container'>
        <h1>Craft Beer List</h1>

        <div className='list-links'>
          <Link to={'/FindBreweryForm'}>
            <button>
              Add a Beer
            </button>
          </Link>

          <Link to={'/FindBreweryForm'}>
            <button type="button">
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
