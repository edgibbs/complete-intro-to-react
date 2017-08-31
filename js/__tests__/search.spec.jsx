import React from 'react';
import {shallow} from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  describe('given no search terms', () => {
    it('returns everything', () => {
      const component = shallow(<Search />);
      expect(component.find(ShowCard).length).toEqual(preload.shows.length);
    });
  });
});
