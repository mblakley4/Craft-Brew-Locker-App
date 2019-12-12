import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddBeerForm.css';

export default class AddBeerForm extends Component {
  render() {
    return (
      <div>
        <h1>Add a Beer</h1>
        <div className='container'>
          <div className='column right'>
          <h2>Brewery</h2>
            <h4>Brewery Location</h4>
            <div className='brewery-img'>
              logo
            </div>
          </div>
          <div className='column left'>
            <label htmlFor="name">Name</label>
              <input type="text" id='name' name='name' required />

            <label htmlFor="style">Style</label>
              <input type="text" id='style' name='style' required />

            <label htmlFor="ABV">ABV</label>
              <input type="number" id='ABV' name='ABV' />

             <label htmlFor="IBU">IBU</label>
              <input type="number" id='IBU' name='IBU' />

            <label htmlFor='beer-color'>Beer Color</label>
            <select name="beer-color" id="beer-color">
              <option value="yellow-1">yellow-1</option>
              <option value="yellow-2">yellow-2</option>
              <option value="yellow-3">yellow-3</option>
              <option value="amber-1">amber-1</option>
              <option value="amber-2">amber-2</option>
              <option value="amber-3">amber-3</option>
              <option value="stout-1">stout-1</option>
              <option value="stout-2">stout-2</option>
            </select>

            <label htmlFor='color'>Try this Color</label>
            <input type='color' id='color' name='color'/>

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="45" rows="10"></textarea>

            <Link to={'/'}>
              <button type='submit'>
                Add Beer
              </button>
            </Link>
            <Link to={'/BeerListPage'}>
              <button type='button'>
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
