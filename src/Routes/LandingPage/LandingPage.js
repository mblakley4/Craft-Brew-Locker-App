import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import craft from '../../Images/craft.jpg'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div className='landing-container'>
        <img src={craft} alt='neon craft sign' className='craft-sign'/>
        <h1>Craft Brew Locker</h1>
        <p className='app-desc'>
          Ever struggle to remember that great beer you tried at the new
          craft brewery?  What was the name of that brewery
          again?  Craft Brew Locker is an easy way to keep track of your
          favorite craft breweries and beer as you travel about!
        </p>
        <button className='landing-button'>
            <Link to={'/BeerListPage'}>
              ENTER
            </Link>
        </button>
        <p className='disclaimer'>
        The CBL app is intended for audiences 21 and over.
        </p>
      </div>
    );
  }
}
