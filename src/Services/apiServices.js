import config from '../config'

const apiServices = {
  getBreweries() {
    return fetch(`${config.API_BASE_URL}/breweries`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBeers() {
    return fetch(`${config.API_BASE_URL}/beers`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getComments() {
    return fetch(`${config.API_BASE_URL}/comments`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postBeer(beer) {
    return fetch(`${config.API_BASE_URL}/beers`, {
      method: 'POST',
      body: JSON.stringify(beer),
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  postBrewery(brewery) {
    return fetch(`${config.API_BASE_URL}/breweries`, {
      method: 'POST',
      body: JSON.stringify(brewery),
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  postComment(comment) {
    return fetch(`${config.API_BASE_URL}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  updateBeer(updatedBeer, beer_id) {
    return fetch(`${config.API_BASE_URL}/beers/${beer_id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedBeer),
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e))
      }
    })
  },
  updateBrewery(updatedBrewery, brewery_id) {
    return fetch(`${config.API_BASE_URL}/breweries/${brewery_id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedBrewery),
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e))
      }
    })
  },
}

export default apiServices
