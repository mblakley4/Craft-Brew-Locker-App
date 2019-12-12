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
import Locker from '../../Locker';
import './App.css';

class App extends React.Component {
  state = {
    Locker: []
  }

  componentDidMount() {
    this.setState({
      Locker
    })
  }

  render() {
    const contextValue = {
      Locker: this.state.Locker
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
