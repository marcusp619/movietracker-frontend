import React from 'react';
import ReactDOM from 'react-dom';
import { UserLoginForm } from './UserLoginForm';
import { shallow } from 'enzyme';


describe('UserLoginForm', () => {
  let wrapper;
  const mockUserSignIn = jest.fn()
  const mockUser = {
    name: 'Louisa',
    id: 1806,
    email: 'Louisa@turing.io',
    password: 'oooooooooooookay'
  }

  beforeEach(() => {
    wrapper = shallow(<UserLoginForm userSignIn={mockUserSignIn} user={mockUser} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct default state', () => {
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().password).toEqual('')
  })

  describe('handleChange function', () => {
    it('should set state with the correct keys and values', () => {

    })
  })

  describe('handleSubmit function', () => {
    it('should call checkUser with the correct params', () => {

    })

    it('should call the userSignIn action creator with the correct params', () => {

    })

    it('should throw an error if the fetch call fails', () => {

    })
  })

  describe('mapStateToProps function', () => {

  })

  describe('mapDispatchToProps function', () => {

  })
});
