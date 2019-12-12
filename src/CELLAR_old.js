const CELLAR = {
  'breweries':
    [
      {
        'id': '1',
        'name': 'SweetWater',
        'city': 'Atlanta',
        'state': 'GA',
        'image': 'https://sweetwaterbrew.com/wp-content/themes/sweetwater/assets/production/images/sw-header-logo.png',
        'dateAdded': '2019-10-21T22:04:28.505Z',
        'dateModified': '2019-10-21T22:04:28.505Z',
      },
      {
        'id': '2',
        'name': 'Wicked Barley',
        'city': 'Jacksonville',
        'state': 'FL',
        'image': 'https://www.wickedbarley.com/wp-content/uploads/2015/02/logo.png',
        'dateAdded': '2019-10-21T22:05:28.505Z',
        'dateModified': '2019-10-21T22:06:28.505Z',
      },
      {
        'id': '3',
        'name': 'Southern Swells',
        'city': 'Jacksonville',
        'state': 'FL',
        'image': 'https://static1.squarespace.com/static/5bbd5969348cd96fd293f13f/t/5be3172f4ae2375f274be673/1575644508652/?format=1500w',
        'dateAdded': '2019-10-21T22:07:28.505Z',
        'dateModified': '2019-10-21T22:08:28.505Z',
      }
    ],
  'beers':
    [
      {
        'id': '1a',
        'name': 'beer1',
        'style': 'Session IPA',
        'ABV': '4.4',
        'IBU': '32',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        'beerColor': 'amber2',
        'breweryId': '1',
        'dateAdded': '2019-10-21T22:04:28.505Z',
        'dateModified': '2019-10-21T22:04:28.505Z',
      },
      {
        'id': '2b',
        'name': 'beer2',
        'style': 'Mai-bach',
        'ABV': '4.4',
        'IBU': '32',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        'beerColor': 'amber2',
        'breweryId': '1',
        'dateAdded': '2019-10-21T22:04:28.505Z',
        'dateModified': '2019-10-21T22:04:28.505Z',
      },
      {
        'id': '3c',
        'name': 'beer3',
        'style': 'Red IPA',
        'ABV': '4.4',
        'IBU': '32',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        'beerColor': 'amber2',
        'breweryId': '2',
        'dateAdded': '2019-10-21T22:04:28.505Z',
        'dateModified': '2019-10-21T22:04:28.505Z',
      },
      {
        'id': '4d',
        'name': 'Dead Guy Ale',
        'style': 'Ale',
        'ABV': '4.4',
        'IBU': '32',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        'beerColor': 'amber2',
        'breweryId': '2',
        'dateAdded': '2019-10-21T22:04:28.505Z',
        'dateModified': '2019-10-21T22:04:28.505Z',
      },
      {
        'id': '5e',
        'name': 'beer5',
        'style': 'Stout',
        'ABV': '4.4',
        'IBU': '32',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        'beerColor': 'amber2',
        'breweryId': '3',
        'dateAdded': '2019-10-21T22:04:28.505Z',
        'dateModified': '2019-10-21T22:04:28.505Z',
      },
      {
        'id': '6f',
        'name': 'beer6',
        'style': 'IPA',
        'ABV': '4.4',
        'IBU': '32',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        'beerColor': 'amber2',
        'breweryId': '3',
        'dateAdded': '2019-10-21T22:04:28.505Z',
        'dateModified': '2019-10-21T22:04:28.505Z',
      }
    ],
  'comments':
  [
    {
      'id': '1',
      'text': 'This beer rocks!',
      'dateAdded': '',
      'userName': 'Mike',
      'beerId': '6f',
    },
    {
      'id': '2',
      'text': 'Yea it does.',
      'dateAdded': '',
      'userName': 'Marie',
      'beerId': '6f',
    },
    {
      'id': '3',
      'text': 'Now that\'s a beer',
      'dateAdded': '',
      'userName': 'Mark',
      'beerId': '2b',
    }
  ]
}


export default CELLAR
