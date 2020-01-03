import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundPage from './NotFoundPage'

describe('NotFoundPage Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <NotFoundPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
