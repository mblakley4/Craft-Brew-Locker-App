import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../Routes/LandingPage/LandingPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage'
import BeerListPage from '../../Routes/BeerListPage/BeerListPage'
import FindBreweryForm from '../../Routes/FindBreweryForm/FindBreweryForm'
import AddBreweryForm from '../../Routes/AddBreweryForm/AddBreweryForm'
import AddBeerForm from '../../Routes/AddBeerForm/AddBeerForm'
import UpdateBrewery from '../../Routes/UpdateBrewery/UpdateBrewery'
import UpdateBeer from '../../Routes/UpdateBeer/UpdateBeer'
import BeerPage from '../../Routes/BeerPage/BeerPage'
import LockerContext from '../../LockerContext'
import Beers from '../../Beers'
import Breweries from '../../Breweries'
import Comments from '../../Comments'
import './App.css'

class App extends React.Component {
  state = {
    Beers: [],
    Breweries: [],
    Comments: []
  }

  handleAddBrewery = brewery => {
    this.setState({
      Breweries: [...this.state.Breweries, brewery]
    })
  }

  handleAddBeer = beer => {
    this.setState({
      Beers: [...this.state.Beers, beer]
    })
  }

  handlePostComment = comment => {
    this.setState({
      Comments: [...this.state.Comments, comment]
    })
  }

  handleUpdateBrewery = updatedBrewery => {
    this.setState({
      Breweries: this.state.Breweries.map(brw =>
        (brw.id !== updatedBrewery.id) ? brw : updatedBrewery
      )
    })
  }

  handleUpdateBeer = updatedBeer => {
    console.log('beer update func');
  }

  componentDidMount() {
    this.setState({
      Beers: Beers,
      Breweries: Breweries,
      Comments: Comments
    })
  }

  render() {
    const contextValue = {
      Beers: this.state.Beers,
      Breweries: this.state.Breweries,
      Comments: this.state.Comments,
      addBrewery: this.handleAddBrewery,
      addBeer: this.handleAddBeer,
      postComment: this.handlePostComment,
      updateBrewery: this.handleUpdateBrewery,
      updateBeer: this.handdleUpdateBeer,
    }
  	return (
  		<main className='App'>
        <LockerContext.Provider value={contextValue}>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/BeerListPage'} component={BeerListPage} />
            <Route path={'/FindBreweryForm'} component={FindBreweryForm} />
            <Route path={'/BeerPage/:beer_id'} component={BeerPage} />
            <Route path={'/AddBreweryForm'} component={AddBreweryForm} />
            <Route path={'/AddBeerForm'} component={AddBeerForm} />
            <Route path={'/UpdateBrewery/:breweryId'} component={UpdateBrewery} />
            <Route path={'/UpdateBeer/:beerId'} component={UpdateBeer} />
            <Route component={NotFoundPage} />
          </Switch>
        </LockerContext.Provider>
  		</main>
  	);
  }
}

export default App;
