import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './MovieContainer';
import {shallow} from 'enzyme';

describe('MovieContainer', () => {
  let wrapper;
  let mockStore;

  beforeEach(() => {
    mockStore = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn(() => {
        return {
          movies: [
            {
              title: 'Venom',
              release_date: '2018',
              overview: 'This is a movie.',
              poster_path: '/something.jpg',
              backdrop_path: '/somethingelse.jpg',
              vote_average: 6.6,
              id: 9,
            },
          ],
        };
      }),
    };
    wrapper = shallow(<MovieContainer store={mockStore} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
