import React from 'react';
import {shallow} from 'enzyme';
import Reservation from './Reservations.js'
 
describe('', () => {
let wrapper, data;
 
beforeEach(() => {

  data = [
    {id:1, name:"Jerry", time:"12:12", date:"12/12", number:4},
    {id:2, name:"Barb", time:"14:14", date:"12/14", number:2},
    {id:3, name:"Murph", time:"1:12", date:"12/12", number:3}
  ]



wrapper = shallow(<Reservation 
  data={data}
/>)
})
 
it('should match the snapshot with all the data passed through', () => {
  expect(wrapper).toMatchSnapshot()
});
 
});