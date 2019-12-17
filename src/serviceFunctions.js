const serviceFunctions = {

  findBrewery(breweries, breweryId) {
    return breweries.filter(brw => brw.id === breweryId)[0]
  },

  getCurrentBeer(Beers, beerId) {
    return Beers.filter(beer => beer.id === beerId)[0]
  },

  findComments(comments, beerId) {
    return comments.filter(comment => comment.beerId === beerId)
  }

}

export default serviceFunctions
