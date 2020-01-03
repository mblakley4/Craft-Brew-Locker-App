import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LockerContext from '../../LockerContext'
import serviceFunctions from '../../Services/serviceFunctions'
import apiServices from '../../Services/apiServices'
import beer_colors from '../../Services/beer_colors'

export default class UpdateBeer extends Component {
  static contextType = LockerContext;

  state = {
    id: '',
    name: '',
    style: '',
    abv: '',
    ibu: '',
    beer_color: '',
    brewery_id: '',
    description: '',
    rating: '',
    changes: false,
  }

  componentDidMount() {
    const beer_id = this.props.match.params.beer_id
    const beers = this.context.Beers
    const beer = serviceFunctions.getCurrentBeer(beers, beer_id)
      || JSON.parse(localStorage.getItem('formValues'))
    localStorage.setItem('formValues', JSON.stringify(
      {
        id: beer.id,
        name: beer.name,
        style: beer.style,
        abv: beer.abv,
        ibu: beer.ibu,
        beer_color: beer.beer_color,
        brewery_id: beer.brewery_id,
        description: beer.description,
        rating: beer.rating
      }
    ))
    this.setState({
      id: beer.id,
      name: beer.name,
      style: beer.style,
      abv: beer.abv,
      ibu: beer.ibu,
      beer_color: beer.beer_color,
      brewery_id: beer.brewery_id,
      description: beer.description,
      rating: beer.rating
    })
  }

  handleChangeName = e => {
    this.setState({ name: e.target.value, changes: true })
  }

  handleChangeStyle = e => {
    this.setState({ style: e.target.value, changes: true })
  }

  handleChangeABV = e => {
    this.setState({ abv: e.target.value, changes: true })
  }

  handleChangeIBU = e => {
    this.setState({ ibu: e.target.value, changes: true })
  }

  handleChangeBeerColor = e => {
    this.setState({ beer_color: e.target.value, changes: true })
  }

  handleChangeDescription = e => {
    this.setState({ description: e.target.value, changes: true })
  }

  handleChangeRating = e => {
    this.setState({ rating: e.target.value, changes: true })
  }

  handleSubmit = e => {
    e.preventDefault()
    const beer_id = this.props.match.params.beer_id
    const { id, name, style, abv, ibu, beer_color, brewery_id, description, rating } = this.state
    const updatedBeer = { id, name, style, abv, ibu, beer_color, brewery_id, rating, description }
    apiServices.updateBeer(updatedBeer, beer_id)
    .then (()  => {
      this.context.updateBeer(updatedBeer)
      this.props.history.push(`/BeerPage/${id}`)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const beer_id = this.props.match.params.beer_id
    const beers = this.context.Beers
    const beer = serviceFunctions.getCurrentBeer(beers, beer_id) || {}
    const breweries = this.context.Breweries
    const brewery_id = beer.brewery_id
    const brewery = serviceFunctions.findBrewery(breweries, brewery_id) || {}
    const { name, style, abv, ibu, beer_color, description, rating } = this.state
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
                  value={abv}
                  onChange={this.handleChangeABV} />

               <label htmlFor="IBU">IBU</label>
                <input
                  type="number"
                  id='IBU'
                  name='IBU'
                  value={ibu}
                  onChange={this.handleChangeIBU} />

              <label htmlFor='beer_color'>Beer Colors from the SRM List</label>
              <select
                name="beer_color"
                id="beer_color"
                style={{'backgroundColor': this.state.beer_color}}
                value={beer_color}
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
                cols="24"
                rows="6"
                value={description}
                onChange={this.handleChangeDescription}>
              </textarea>
              <button
                type='submit'
                disabled={!this.state.changes}
                className={this.state.changes ? '' : 'disabled_button'}
              >
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
