import React from 'react';
import ReactDOM from 'react-dom';
import BeerPage from './BeerPage';

describe('BeerPage Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BeerPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
