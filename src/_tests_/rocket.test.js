import { render } from '@testing-library/react';
import Rocket from '../components/rocket';

describe('tests for rocket components', () => {
  test('check snapshot for rocket', () => {
    const data = [
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
        data={data}
        Reservation={Reservation}
        Cancelation={Cancelation}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
