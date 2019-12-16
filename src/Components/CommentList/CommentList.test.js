import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList';

describe('CommentList Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CommentList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
