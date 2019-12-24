import React from 'react'

const LockerContext = React.createContext({
  Beers: [],
  Breweries: [],
  Comments: [],
  loaded: '',
  addBeer: () => {},
  addBrewery: () => {},
  updateBeer: () => {},
  updateBrewery: () => {},
  postComment: () => {},
  setLoadStatus: () => {},
})

export default LockerContext
