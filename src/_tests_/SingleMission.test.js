import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SingleMission from '../components/SingleMission';

const mockStore = configureStore([]);

describe('SingleMission', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should match the snapshot', () => {
    const mission = {
      id: '1',
      missionName: 'Mission 1',
      description: 'Mission 1 description',
      joined: false,
    };

    const { asFragment } = render(
      <Provider store={store}>
        <SingleMission mission={mission} />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
