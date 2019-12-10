import React, { Component } from 'react'

export default class Filters extends Component {
  render() {
    return (
      <div>
        <h4>Style</h4>

        <select name="beer-style-filter" id="beer-style-filter">
          <option value="default">...</option>
          <option value="IPA">IPA</option>
          <option value="Lager">Lager</option>
        </select>

        <h4>Brewery</h4>
        
        <select name="brewery-filter" id="brewery-filter">
          <option value="default">...</option>
          <option value="southerSwells">Southern Swells</option>
          <option value="wickedBarley">Wicked Barley</option>
        </select>
      </div>
    );
  }
}
