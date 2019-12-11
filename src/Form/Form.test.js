import React from 'react';
import {shallow} from 'enzyme';
import Form from './Form.js';
 
describe('Form', () => {
let wrapper, mockCreateReservation;
 
beforeEach(() => {
  mockCreateReservation = jest.fn();
wrapper = shallow(<Form
  mockCreateReservation={mockCreateReservation}
/>)
})
 
it('should match the snapshot with all the data passed through', () => {
  expect(wrapper).toMatchSnapshot();
});

it('upon mounting it should have some state', () => {
  let defaultState = {
    name: '',
    date: '',
    time: '',
    number: null,
    className: 'hidden'
   }

  expect(wrapper.state()).toEqual(defaultState);
});

it('should update state when handleChange is called', () => {
  let mockEvent = { target: {id: 'name', value: "Jerry"} };
  
  wrapper.instance().handleChange(mockEvent);

  expect(wrapper.state('name')).toEqual('Jerry');
});


it.skip('should call submitReservation when button is clicked', () => {
  let mockEvent = { preventDefault: jest.fn() };
  wrapper.instance().submitReservation = jest.fn();

  wrapper.find('#form-btn').simulate('click');
  expect(wrapper.instance().submitReservation(mockEvent)).toHaveBeenCalled();
  // expect(wrapper.instance().submitReservation(mockEvent)).toHaveBeenCalledTimes(1)
});

});