// @flow

import {setSearchTerm, addAPIData} from '../actionCreators';

describe('#setSearchTerm', () => {
  it('returns an action object', () => {
    expect(setSearchTerm('New York')).toMatchSnapshot();
    expect(setSearchTerm('New York')).toEqual({
      type: 'SET_SEARCH_TERM',
      payload: 'New York'
    });
  });
});

describe('#addAPIData', () => {
  it('returns an action object', () => {
    expect(
      addAPIData({
        title: 'Stranger Things',
        imdbID: '12',
        rating: '8.6'
      })
    ).toEqual({
      type: 'ADD_API_DATA',
      payload: {title: 'Stranger Things', imdbID: '12', rating: '8.6'}
    });
  });
});
