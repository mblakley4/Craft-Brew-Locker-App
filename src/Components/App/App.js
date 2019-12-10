import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../Routes/LandingPage/LandingPage';
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import BeerListPage from '../../Routes/BeerListPage/BeerListPage';
import FindBreweryForm from '../../Routes/FindBreweryForm/FindBreweryForm';
import AddBreweryForm from '../../Routes/AddBreweryForm/AddBreweryForm';
import AddBeerForm from '../../Routes/AddBeerForm/AddBeerForm';
import './App.css';

class App extends React.Component {

  componentDidMount() {

  }
  
  render() {
  	return (
  		<main className='App'>
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/BeerListPage'} component={BeerListPage} />
        <Route path={'/FindBreweryForm'} component={FindBreweryForm} />
        <Route path={'/AddBreweryForm'} component={AddBreweryForm} />
        <Route path={'/AddBeerForm'} component={AddBeerForm} />
        <Route component={NotFoundPage} />
      </Switch>
  		</main>
  	);
  }
}

export default App;


// <Route path={'/PledgeFormPage'} component={PledgeFormPage} />
