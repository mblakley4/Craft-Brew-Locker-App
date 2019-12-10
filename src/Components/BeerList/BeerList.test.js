import React from 'react';
import ReactDOM from 'react-dom';
import BeerList from './BeerList';

describe('BeerList Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BeerList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
