const serviceFunctions = {

  findBrewery(breweries, brewery_id) {
    return breweries.filter(brw => brw.id === parseInt(brewery_id))[0]
  },

  getCurrentBeer(Beers, beer_id) {
    return Beers.filter(beer => beer.id === parseInt(beer_id))[0]
  },

  findComments(comments, beer_id) {
    return comments.filter(comment => comment.beer_id === parseInt(beer_id))
  }

}

export default serviceFunctions
