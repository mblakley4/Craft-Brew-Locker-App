import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import LockerContext from '../../LockerContext'
import ValidationError from '../../Components/ValidationError'
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
    ABV: {
      value: '',
      touched: false
    },
    IBU: {
      value: '',
      touched: false
    },
    beerColor: {
      value: '',
      touched: false
    },
    description: {
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
      ABV: this.state.ABV.value,
      IBU: this.state.IBU.value,
      beerColor: this.state.beerColor.value,
      description: this.state.description.value,
      brewery: {
        id: this.props.location.state.brewery.id,
        name: this.props.location.state.brewery.name,
        city: this.props.location.state.brewery.city,
        us_state: this.props.location.state.brewery.us_state,
        image: this.props.location.state.brewery.image,
      },
      comments: []
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

  updateBeerABV(ABV) {
    this.setState({ABV: {value: ABV, touched: true}})
  }

  updateBeerIBU(IBU) {
    this.setState({IBU: {value: IBU, touched: true}})
  }

  updateBeerColor(color) {
    this.setState({beerColor: {value: color, touched: true}})
  }

  updateBeerDescription(description) {
    this.setState({description: {value: description, touched: true}})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/BeerListPage'} />
    }
    const beerBrewery = this.props.location.state.brewery

    return (
      <div>
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

              <label htmlFor="ABV">ABV</label>
                <input
                  type="number"
                  step='.01'
                  id='ABV'
                  name='ABV'
                  onChange={e => this.updateBeerABV(e.target.value)} />

               <label htmlFor="IBU">IBU</label>
                <input
                  type="number"
                  id='IBU'
                  name='IBU'
                  onChange={e => this.updateBeerIBU(e.target.value)} />

              <label htmlFor='beer-color'>Beer Color</label>
              <select
                name="beer-color"
                id="beer-color"
                onChange={e => this.updateBeerColor(e.target.value)}>
                <option value="yellow-1">yellow-1</option>
                <option value="yellow-2">yellow-2</option>
                <option value="yellow-3">yellow-3</option>
                <option value="amber-1">amber-1</option>
                <option value="amber-2">amber-2</option>
                <option value="amber-3">amber-3</option>
                <option value="stout-1">stout-1</option>
                <option value="stout-2">stout-2</option>
              </select>

              <div>Sample Color here</div>

              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="45"
                rows="10"
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
    );
  }
}
