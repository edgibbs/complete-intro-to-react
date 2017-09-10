import React from 'react';
import {shallow, render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import store from '../store';
import {setSearchTerm} from '../actionCreators';
import preload from '../../data.json';
import Search, {Unwrapped as UnwrappedSearch} from '../Search';
import ShowCard from '../ShowCard';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm="" />
    );
    expect(component).toMatchSnapshot();
  });

  describe('given no search terms', () => {
    it('returns everything', () => {
      const component = shallow(
        <UnwrappedSearch shows={preload.shows} searchTerm="" />
      );
      expect(component.find(ShowCard).length).toEqual(preload.shows.length);
    });
  });
  describe('given a search term without Redux', () => {
    it('returns only matching records', () => {
      const searchWord = 'black';
      store.dispatch(setSearchTerm(searchWord));
      const component = shallow(
        <UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />
      );
      expect(component.find(ShowCard).length).toEqual(2);
    });
  });

  describe('given a search term with Redux', () => {
    it('returns only matching records', () => {
      const searchWord = 'black';
      store.dispatch(setSearchTerm(searchWord));
      const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <Search shows={preload.shows} searchTerm={searchWord} />
          </MemoryRouter>
        </Provider>
      );
      expect(component.find('.show-card').length).toEqual(2);
    });
  });
});
