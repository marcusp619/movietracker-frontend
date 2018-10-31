import React from 'react';
import ReactDOM from 'react-dom';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme';

describe('Header Component', () => {
  let wrapper;
  const mockUser = {
    name: 'Louisa',
    id: 1806,
    email: 'Louisa@turing.io',
    password: 'oooooooooooookay'
  };
  const mockSignOutUser = jest.fn();

  it('should match the snapshot', () => {
    wrapper = shallow(
      <Header
        user={mockUser}
        signOutUser={mockSignOutUser}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps function', () => {
    it('should return an object with a user', () => {
      const mockState = {
        movies: [
          {title: 'Coco', vote_average: 7.6, favorite: true},
          {title: 'Inception', vote_average: 8.6, favorite: true},
          {title: 'Hunt for Red October', vote_average: 4.6, favorite: true}
        ],
        user: {name: 'Louisa', email: 'blah@gmail.com'},
        favorites: []
      }
      const expected = {user: {name: 'Louisa', email: 'blah@gmail.com'}}
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps function', () => {

  })

})