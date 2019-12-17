import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../Routes/LandingPage/LandingPage';
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import BeerListPage from '../../Routes/BeerListPage/BeerListPage';
import FindBreweryForm from '../../Routes/FindBreweryForm/FindBreweryForm';
import AddBreweryForm from '../../Routes/AddBreweryForm/AddBreweryForm';
import AddBeerForm from '../../Routes/AddBeerForm/AddBeerForm';
import BeerPage from '../../Routes/BeerPage/BeerPage';
import LockerContext from '../../LockerContext';
import Beers from '../../Beers';
import Breweries from '../../Breweries';
import './App.css';

class App extends React.Component {
  state = {
    Beers: [],
    Breweries: [],
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

  handlePostComment = (comment, id) => {
    const beer = this.state.Beers.filter(beer => beer.id == id)[0]
    beer.comments.push(comment)
    const updatedBeer = beer
    console.log(updatedBeer);

    this.setState({
      Beers: this.state.Beers.map(beer =>
        (beer.id !== id) ? beer : updatedBeer
      )
    })
    console.log(this.state.Beers);
  }

  componentDidMount() {
    this.setState({
      Beers: Beers,
      Breweries: Breweries
    })
  }

  render() {
    const contextValue = {
      Beers: this.state.Beers,
      Breweries: this.state.Breweries,
      addBrewery: this.handleAddBrewery,
      addBeer: this.handleAddBeer,
      postComment: this.handlePostComment,
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
            <Route component={NotFoundPage} />
          </Switch>
        </LockerContext.Provider>
  		</main>
  	);
  }
}

export default App;
