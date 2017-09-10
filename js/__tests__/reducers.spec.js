// @flow

import reducers from '../reducers';

describe('SET_SEARCH_TERM', () => {
  it('sets the search term', () => {
    const state = reducers(
      {searchTerm: '', apiData: {}},
      {type: 'SET_SEARCH_TERM', payload: 'black'}
    );
    expect(state).toEqual({searchTerm: 'black', apiData: {}});
  });
});

describe('ADD_API_DATA', () => {
  it('returns expected data', () => {
    const state = reducers(
      {searchTerm: '', apiData: {}},
      {
        type: 'ADD_API_DATA',
        payload: {
          rating: '4.0',
          title: 'Westworld',
          year: '2016',
          description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
          poster: 'ww.jpg',
          imdbID: 'tt0475784',
          trailer: 'eX3u0IlBBO4'
        }
      }
    );
    expect(state).toEqual({
      searchTerm: '',
      apiData: {
        tt0475784: {
          rating: '4.0',
          title: 'Westworld',
          year: '2016',
          description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
          poster: 'ww.jpg',
          imdbID: 'tt0475784',
          trailer: 'eX3u0IlBBO4'
        }
      }
    });
  });
});
