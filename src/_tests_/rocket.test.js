import { render } from '@testing-library/react';
import Rocket from '../components/rocket';

describe('tests for rocket components', () => {
  test('check snapshot for rocket', () => {
    const rocketsData = [
      {
        id: 1,
        name: 'rocket 1',
        image: 'image1',
        description: 'description of rocket1',
        reserved: false,
      },
      {
        id: 2,
        name: 'rocket 2',
        image: 'image2',
        description: 'description of rocket2',
        reserved: false,
      },
    ];
    const Reservation = jest.fn();
    const Cancelation = jest.fn();

    const tree = render(
      <Rocket
        rocketsData={rocketsData}
        handleReservations={Reservation}
        handlecancelation={Cancelation}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
