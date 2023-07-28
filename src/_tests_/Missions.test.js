import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../components/Missions';

const mockStore = configureStore([]);

describe('Missions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            id: '1',
            missionName: 'Mission 1',
            description: 'Mission 1 description',
            joined: false,
          },
          {
            id: '2',
            missionName: 'Mission 2',
            description: 'Mission 2 description',
            joined: true,
          },
        ],
        isLoading: false,
      },
    });
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  // Add more tests as needed to test the rendering of the Missions component and its behavior.
});
