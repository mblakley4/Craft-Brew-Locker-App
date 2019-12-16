import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments';

describe('Comments Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comments />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
