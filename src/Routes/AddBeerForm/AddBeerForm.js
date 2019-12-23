import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import LockerContext from '../../LockerContext'
import ValidationError from '../../Components/ValidationError'
import beer_colors from '../../Services/beer_colors'
import './AddBeerForm.css'

export default class AddBeerForm extends Component {
  static contextType = LockerContext

  state = {
    name: {
      value: '',
      touched: false
    },
    style: {
      value: '',
      touched: false
    },
    abv: {
      value: '',
      touched: false
    },
    ibu: {
      value: '',
      touched: false
    },
    beer_color: {
      value: '',
      touched: false
    },
    description: {
      value: '',
      touched: false
    },
    rating: {
      value: '',
      touched: false
    },
    redirect: false
  }

  handleSubmit = e => {
    e.preventDefault()
    const beer = {
      id: Math.floor(Math.random()*1000),
      name: this.state.name.value,
      style: this.state.style.value,
      abv: this.state.abv.value,
      ibu: this.state.ibu.value,
      beer_color: this.state.beer_color.value,
      description: this.state.description.value,
      rating: this.state.rating.value,
      brewery_id: this.props.location.state.brewery.id,
    }
    this.context.addBeer(beer)
    this.setState({
      redirect: true
    })
  }

  validateName(fieldValue) {
    const name = this.state.name.value.trim();
    if (name.length <= 2 ) {
      return 'A name is required'
    }
  }

  validateStyle(fieldValue) {
    const style = this.state.style.value.trim();
    if (style.length <= 2 ) {
      return 'A style is required'
    }
  }

  updateBeerName(name) {
    this.setState({name: {value: name, touched: true}})
  }

  updateBeerStyle(style) {
    this.setState({style: {value: style, touched: true}})
  }

  updateBeerABV(abv) {
    this.setState({abv: {value: abv, touched: true}})
  }

  updateBeerIBU(ibu) {
    this.setState({ibu: {value: ibu, touched: true}})
  }

  updateBeerColor(color) {
    this.setState({beer_color: {value: color, touched: true}})
  }

  updateBeerDescription(description) {
    this.setState({description: {value: description, touched: true}})
  }

  updateBeerRating(rating) {
    this.setState({rating: {value: rating, touched: true}})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/BeerListPage'} />
    }
    const beerBrewery = this.props.location.state.brewery
    const radioInputs = beer_colors.map(
      (c, i) =>
        <option
          value={c.color}
          key={i} >
          {c.srm}
        </option>
    )

    return (
      <div>
      <div className='add-update-Beer-container'>
      <div className='back-container'>
        <h1>Add a Beer</h1>
        <div className='container'>
          <div className='columns right'>
            <h2>{beerBrewery.name}</h2>
            <h4>{beerBrewery.city}, {beerBrewery.us_state}</h4>
            <div className='brewery-img'>
              <img className='brewery-img' src={beerBrewery.image} alt='brewery logo' />
            </div>
          </div>
          <div className='columns left'>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  onChange={e => this.updateBeerName(e.target.value)}
                  required />
                  {this.state.name.touched && (<ValidationError message={this.validateName()}/> )}

              <label htmlFor="style">Style</label>
                <input
                  type="text"
                  id='style'
                  name='style'
                  onChange={e => this.updateBeerStyle(e.target.value)}
                  required />
                  {this.state.style.touched && (<ValidationError message={this.validateStyle()}/> )}

              <label htmlFor="abv">ABV</label>
                <input
                  type="number"
                  step='.01'
                  id='abv'
                  name='abv'
                  onChange={e => this.updateBeerABV(e.target.value)} />

               <label htmlFor="ibu">IBU</label>
                <input
                  type="number"
                  id='ibu'
                  name='ibu'
                  onChange={e => this.updateBeerIBU(e.target.value)} />

              <label htmlFor='beer_colors'>Beer Colors from the SRM List</label>
              <select
                name="beer-color"
                id="beer-color"
                style={{'background-color': this.state.beer_color.value}}
                onChange={e => this.updateBeerColor(e.target.value)}>
                {radioInputs}
              </select>

              <label htmlFor='rating'>Rating
                {' '}
              </label>
              <input
                type='number'
                name='rating'
                id='rating'
                defaultValue='1'
                min='1'
                max='5'
                onChange={e => this.updateBeerRating(e.target.value)}
                required
              />

              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="26"
                rows="6"
                onChange={e => this.updateBeerDescription(e.target.value)}>
              </textarea>
              <button type='submit'>
                Add Beer
              </button>
            <Link to={'/BeerListPage'}>
              <button type='button'>
                Cancel
              </button>
            </Link>
          </form>
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}
