import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import UpdateBrewery from './UpdateBrewery'

describe('UpdateBrewery Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <UpdateBrewery />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
