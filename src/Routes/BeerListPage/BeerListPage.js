import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Filters from '../../Components/Filters/Filters'
import BeerList from '../../Components/BeerList/BeerList'
import Footer from '../../Components/Footer/Footer'
import './BeerListPage.css'

export default class BeerListPage extends Component {
  render() {
    return (
      <div>
      <h1>Beer List</h1>
      <section className='filters'>
        <Filters />
      </section>

      <Link to={'/FindBreweryForm'}>
        <button>
          Add a Beer
        </button>
      </Link>

      <section className='beer-list'>
        <BeerList />
      </section>
      <Footer />
      </div>
    );
  }
}
