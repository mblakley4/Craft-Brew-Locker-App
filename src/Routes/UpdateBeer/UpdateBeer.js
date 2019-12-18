import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LockerContext from '../../LockerContext'
import serviceFunctions from '../../serviceFunctions'
import beer_colors from '../../beer_colors'

export default class UpdateBeer extends Component {

  static contextType = LockerContext;

  state = {
    id: '',
    name: '',
    style: '',
    ABV: '',
    IBU: '',
    beerColor: '',
    breweryId: '',
    description: '',
    rating: ''
  }

  componentDidMount() {
    const beerId = this.props.match.params.beerId
    const beers = this.context.Beers
    const beer = serviceFunctions.getCurrentBeer(beers, beerId)
      || JSON.parse(localStorage.getItem('formValues'))
    localStorage.setItem('formValues', JSON.stringify(
      {
        id: beer.id,
        name: beer.name,
        style: beer.style,
        ABV: beer.ABV,
        IBU: beer.IBU,
        beerColor: beer.beerColor,
        breweryId: beer.breweryId,
        description: beer.description,
        rating: beer.rating
      }
    ))
    this.setState({
      id: beer.id,
      name: beer.name,
      style: beer.style,
      ABV: beer.ABV,
      IBU: beer.IBU,
      beerColor: beer.beerColor,
      breweryId: beer.breweryId,
      description: beer.description,
      rating: beer.rating
    })
  }

  handleChangeName = e => {
    this.setState({ name: e.target.value })
  }

  handleChangeStyle = e => {
    this.setState({ style: e.target.value })
  }

  handleChangeABV = e => {
    this.setState({ ABV: e.target.value })
  }

  handleChangeIBU = e => {
    this.setState({ IBU: e.target.value })
  }

  handleChangeBeerColor = e => {
    this.setState({ beerColor: e.target.value })
  }

  handleChangeDescription = e => {
    this.setState({ description: e.target.value })
  }

  handleChangeRating = e => {
    this.setState({ rating: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { id, name, style, ABV, IBU, beerColor, breweryId, description, rating } = this.state
    const updatedBeer = { id, name, style, ABV, IBU, beerColor, breweryId, description, rating }
    this.context.updateBeer(updatedBeer)
    this.props.history.push(`/BeerPage/${id}`)
  }

  render() {
    const beerId = this.props.match.params.beerId
    const beers = this.context.Beers
    const beer = serviceFunctions.getCurrentBeer(beers, beerId) || {}
    const breweries = this.context.Breweries
    const breweryId = beer.breweryId
    const brewery = serviceFunctions.findBrewery(breweries, breweryId) || {}
    const { name, style, ABV, IBU, beerColor, description, rating } = this.state
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
        <h1>Update Beer</h1>
        <div className='container'>
          <div className='columns right'>
            <h2>{brewery.name}</h2>
            <h4>{brewery.city}, {brewery.us_state}</h4>
            <div className='brewery-img'>
              <img className='brewery-img' src={brewery.image} alt='brewery logo' />
            </div>
          </div>
          <div className='columns left'>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  value={name}
                  onChange={this.handleChangeName}
                  required />

              <label htmlFor="style">Style</label>
                <input
                  type="text"
                  id='style'
                  name='style'
                  value={style}
                  onChange={this.handleChangeStyle}
                  required />

              <label htmlFor="ABV">ABV</label>
                <input
                  type="number"
                  step='.01'
                  id='ABV'
                  name='ABV'
                  value={ABV}
                  onChange={this.handleChangeABV} />

               <label htmlFor="IBU">IBU</label>
                <input
                  type="number"
                  id='IBU'
                  name='IBU'
                  value={IBU}
                  onChange={this.handleChangeIBU} />

              <label htmlFor='beer_colors'>Beer Colors from the SRM List</label>
              <select
                name="beer-color"
                id="beer-color"
                style={{'backgroundColor': this.state.beerColor.value}}
                value={beerColor}
                onChange={this.handleChangeBeerColor}>
                {radioInputs}
              </select>

              <label htmlFor='rating'>Rating
                {' '}
              </label>
              <input
                type='number'
                name='rating'
                id='rating'
                min='1'
                max='5'
                value={rating}
                onChange={this.handleChangeRating}
                required
              />

              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="26"
                rows="6"
                value={description}
                onChange={this.handleChangeDescription}>
              </textarea>
              <button type='submit'>
                Save
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
