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

  describe('given a search term', () => {
    it('returns only matching records', () => {
      const searchWord = 'black';
      const component = shallow(<Search />);
      component.find('input').simulate('change', {target: {value: searchWord}});
      expect(component.find(ShowCard).length).toEqual(2);
    });
  });
});
