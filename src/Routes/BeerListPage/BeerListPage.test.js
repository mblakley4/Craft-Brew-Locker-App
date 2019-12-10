import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import BeerListPage from './BeerListPage'

describe('BeerListPage Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <BeerListPage />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
