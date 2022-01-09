import React from 'react';
import { shallow } from 'enzyme';
import SignInAndSignUpPage from './sign-in-and-sign-up.component';

test('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});
