import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card.js'
 
describe('Card', () => {
let wrapper;
 
beforeEach(() => {

wrapper = shallow(<Card
  name={'Jerry'}
  time={'12:12'}
  date={'12/12'}
  number={4}
/>)
})

 
it('should match the snapshot with all the data passed through', () => {
  expect(wrapper).toMatchSnapshot()
})
 
});