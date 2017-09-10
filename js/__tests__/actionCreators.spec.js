// @flow

import moxios from 'moxios';
import {setSearchTerm, addAPIData} from '../actionCreators';
import getAPIDetails from '../asyncActions';

const strangerThings = {
  title: 'Stranger Things',
  year: '2016-',
  description: 'description',
  poster: 'st.jpg',
  imdbID: '12',
  trailer: 'trailer',
  rating: '8.6'
};

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
    expect(addAPIData(strangerThings)).toEqual({
      type: 'ADD_API_DATA',
      payload: strangerThings
    });
  });
});

describe('#getAPIDetails', () => {
  it('gets some api data', (done: Function) => {
    const dispatchMock = jest.fn();
    moxios.withMock(() => {
      getAPIDetails(strangerThings.imdbID)(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: strangerThings
          })
          .then(() => {
            expect(request.url).toEqual(
              `http://127.0.0.1:3000/${strangerThings.imdbID}`
            );
            expect(dispatchMock).toBeCalledWith(addAPIData(strangerThings));
            done();
          });
      });
    });
  });
});
