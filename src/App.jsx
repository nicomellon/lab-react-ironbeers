import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BeersList from './pages/BeersList';
import RandomBeer from './pages/RandomBeer';
import SpecificBeer from './pages/SpecificBeer';
import NewBeerForm from './pages/NewBeerForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beers/create" component={NewBeerForm} />
        <Route path="/beers/random" component={RandomBeer} />
        <Route path="/beers/:id" component={SpecificBeer} />
        <Route path="/beers" component={BeersList} />
      </Switch>
    </div>
  );
}

export default App;
