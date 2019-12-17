const Beers = [
  {
    'id': '1a',
    'name': 'beer1',
    'style': 'Session IPA',
    'ABV': '4.4',
    'IBU': '32',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    'beerColor': '#C1963C',
    'dateAdded': '2019-10-21T22:04:28.505Z',
    'dateModified': '2019-10-21T22:04:28.505Z',
    'brewery': {
      'id': '1',
      'name': 'SweetWater',
      'city': 'Atlanta',
      'us_state': 'GA',
      'image': 'https://sweetwaterbrew.com/wp-content/themes/sweetwater/assets/production/images/sw-header-logo.png',
      'dateAdded': '2019-10-21T22:04:28.505Z',
      'dateModified': '2019-10-21T22:04:28.505Z',
    },
    'comments': []
  },
  {
    'id': '2b',
    'name': 'beer2',
    'style': 'Mai-bach',
    'ABV': '4.4',
    'IBU': '32',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    'beerColor': '#E0D01B',
    'dateAdded': '2019-10-21T22:04:28.505Z',
    'dateModified': '2019-10-21T22:04:28.505Z',
    'brewery': {
      'id': '1',
      'name': 'SweetWater',
      'city': 'Atlanta',
      'us_state': 'GA',
      'image': 'https://sweetwaterbrew.com/wp-content/themes/sweetwater/assets/production/images/sw-header-logo.png',
      'dateAdded': '2019-10-21T22:04:28.505Z',
      'dateModified': '2019-10-21T22:04:28.505Z',
    },
    'comments': [
      {
        'id': '3',
        'text': 'Now that\'s a beer',
        'dateAdded': '',
        'userName': 'Mark',
        'numOrder': '1'
      },
    ]
  },
  {
    'id': '3c',
    'name': 'beer3',
    'style': 'Red IPA',
    'ABV': '4.4',
    'IBU': '32',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    'beerColor': '#361F1B',
    'dateAdded': '2019-10-21T22:04:28.505Z',
    'dateModified': '2019-10-21T22:04:28.505Z',
    'brewery': {
      'id': '2',
      'name': 'Wicked Barley',
      'city': 'Jacksonville',
      'us_state': 'FL',
      'image': 'https://www.wickedbarley.com/wp-content/uploads/2015/02/logo.png',
      'dateAdded': '2019-10-21T22:05:28.505Z',
      'dateModified': '2019-10-21T22:06:28.505Z',
    },
    'comments': []
  },
  {
    'id': '4d',
    'name': 'Dead Guy Ale',
    'style': 'Ale',
    'ABV': '4.4',
    'IBU': '32',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    'beerColor': '#19100F',
    'dateAdded': '2019-10-21T22:04:28.505Z',
    'dateModified': '2019-10-21T22:04:28.505Z',
    'brewery': {
      'id': '2',
      'name': 'Wicked Barley',
      'city': 'Jacksonville',
      'us_state': 'FL',
      'image': 'https://www.wickedbarley.com/wp-content/uploads/2015/02/logo.png',
      'dateAdded': '2019-10-21T22:05:28.505Z',
      'dateModified': '2019-10-21T22:06:28.505Z',
    },
    'comments': []
  },
  {
    'id': '5e',
    'name': 'beer5',
    'style': 'Stout',
    'ABV': '4.4',
    'IBU': '32',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    'beerColor': '#100B0A',
    'dateAdded': '2019-10-21T22:04:28.505Z',
    'dateModified': '2019-10-21T22:04:28.505Z',
    'brewery': {
      'id': '3',
      'name': 'Southern Swells',
      'city': 'Jacksonville',
      'us_state': 'FL',
      'image': 'https://static1.squarespace.com/static/5bbd5969348cd96fd293f13f/t/5be3172f4ae2375f274be673/1575644508652/?format=1500w',
      'dateAdded': '2019-10-21T22:07:28.505Z',
      'dateModified': '2019-10-21T22:08:28.505Z',
    },
    'comments': []
  },
  {
    'id': '6f',
    'name': 'beer6',
    'style': 'IPA',
    'ABV': '4.4',
    'IBU': '32',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    'beerColor': '#6B3A1E',
    'breweryId': '3',
    'dateAdded': '2019-10-21T22:04:28.505Z',
    'dateModified': '2019-10-21T22:04:28.505Z',
    'brewery': {
      'id': '3',
      'name': 'Southern Swells',
      'city': 'Jacksonville',
      'us_state': 'FL',
      'image': 'https://static1.squarespace.com/static/5bbd5969348cd96fd293f13f/t/5be3172f4ae2375f274be673/1575644508652/?format=1500w',
      'dateAdded': '2019-10-21T22:07:28.505Z',
      'dateModified': '2019-10-21T22:08:28.505Z',
    },
    'comments': [
      {
        'id': '1',
        'text': 'This beer rocks!',
        'dateAdded': '',
        'userName': 'Mike',
        'beerId': '6f',
        'numOrder': '1'
      },
      {
        'id': '2',
        'text': 'Yea it does.',
        'dateAdded': '',
        'userName': 'Marie',
        'beerId': '6f',
        'numOrder': '2'
      },
    ]
  }
]

export default Beers