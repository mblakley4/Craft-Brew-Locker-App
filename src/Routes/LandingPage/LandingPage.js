import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div className='landing-container'>
        <h1>Craft Brew Locker</h1>
        <p className='app-desc'>
          Ever struggle to remember that great beer you tried at the new
          craft brewery in Jacksonville?  What was the name of the brewery
          anyway?  Craft Brew Locker is an easy way to keep track of your
          favorite craft breweries and beer as you travel about!
        </p>
        <button>
          <Link to={'/BeerListPage'}>
            LET'S GO!
          </Link>
        </button>
        <p className='disclaimer'>
        The CBL app is intended for audiences 21 and over.
        </p>
      </div>
    );
  }
}
