import React, { Component } from 'react'

export default class BeerList extends Component {
  render() {
    return (
      <div>
        <div className='beer-tile'>
          <h2 className='beer-name'>Beer Name</h2>
          <h3 className='brewery-name'>Example 1</h3>
        </div>
        <div className='beer-tile'>
          <h2 className='beer-name'>Beer Name Number 2</h2>
          <h3 className='brewery-name'>Example 2</h3>
        </div>
        <div className='beer-tile'>
          <h2 className='beer-name'>Beer Name Number 3</h2>
          <h3 className='brewery-name'>Example 3</h3>
        </div>
        <div className='beer-tile'>
          <h2 className='beer-name'>Beer Name Number 4</h2>
          <h3 className='brewery-name'>Example 4</h3>
        </div>
        <div className='beer-tile'>
          <h2 className='beer-name'>Beer Name Number 5</h2>
          <h3 className='brewery-name'>Example 5</h3>
        </div>
        <div className='beer-tile'>
          <h2 className='beer-name'>Beer Name Number 6</h2>
          <h3 className='brewery-name'>Example 6</h3>
        </div>
      </div>
    );
  }
}
