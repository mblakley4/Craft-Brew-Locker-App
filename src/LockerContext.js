import React from 'react'

const LockerContext = React.createContext({
  Locker: [],
  addBeer: () => {},
  addBrewery: () => {},
  updateBeer: () => {},
  updateBrewery: () => {},
})

export default LockerContext
