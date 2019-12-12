import React from 'react';
import ReactDOM from 'react-dom';
import BeerData from './BeerData';

describe('BeerData Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BeerData />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
