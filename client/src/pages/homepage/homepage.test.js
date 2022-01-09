import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './homepage.component';

test('should render Homepage component', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});
