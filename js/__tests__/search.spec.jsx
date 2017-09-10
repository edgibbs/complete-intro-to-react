import React from 'react';
import {shallow} from 'enzyme';
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

  describe('given a search term', () => {
    it('returns only matching records', () => {
      const searchWord = 'black';
      const component = shallow(
        <UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />
      );
      // component.find('input').simulate('change', {target: {value: searchWord}});
      expect(component.find(ShowCard).length).toEqual(2);
    });
  });
});
