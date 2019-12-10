import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddBreweryForm.css';

export default class AddBreweryForm extends Component {
  render() {
    return (
      <div>
      <h1>Add a Brewery</h1>
      <form>
        <label htmlFor="name">Brewery Name</label>
          <input type="text" id='name' name='name' required />

        <label htmlFor="name">Brewery Location</label>
          <input type="text" id='location' name='location' required />

        <label htmlFor="logo">Choose a Logo or Photo for the Brewery:>
          <br />
          <span>(.png, .jpeg)</span>
        </label>
      <input type="file" id='logo' name='logo' accept='image/png, image/jpeg' />

      <Link to={'/FindBreweryForm'}>
        <button type='submit'>
          Add Brewery
        </button>
      </Link>
      <Link to={'/BeerListPage'}>
        <button type='button'>
          Cancel
        </button>
      </Link>
      </form>
      </div>
    );
  }
}
