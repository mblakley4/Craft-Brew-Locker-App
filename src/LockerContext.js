import React from 'react'

const LockerContext = React.createContext({
  Beers: [],
  Breweries: [],
  Comments: [],
  addBeer: () => {},
  addBrewery: () => {},
  updateBeer: () => {},
  updateBrewery: () => {},
  postComment: () => {},
})

export default LockerContext
