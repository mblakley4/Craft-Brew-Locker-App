import React from 'react';
import ReactDOM from 'react-dom';
import Filters from './Filters';

describe('Filters Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filters />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
