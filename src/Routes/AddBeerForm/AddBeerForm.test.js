import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AddBeerForm from './AddBeerForm'

describe('AddBeerForm Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddBeerForm />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
