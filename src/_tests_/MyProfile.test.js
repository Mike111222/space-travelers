import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MyProfile from '../components/MyProfile';

test('render correctly and matches the My Profile snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
