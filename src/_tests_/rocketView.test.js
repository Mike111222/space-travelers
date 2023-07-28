import { render } from '@testing-library/react';
import PRocketView from '../components/rocketView';

describe('tests for rocket components in my profile view', () => {
  test('check snapshot for rockets View in my profile', () => {
    const rocketsData = [
      {
        id: 1, name: 'rocket 1', image: 'image1', description: 'description of rocket1', reserved: false,
      },
      {
        id: 2, name: 'rocket 2', image: 'image2', description: 'description of rocket2', reserved: false,
      },
      {
        id: 3, name: 'rocket 3', image: 'image3', description: 'description of rocket3', reserved: true,
      },
      {
        id: 4, name: 'rocket 4', image: 'image4', description: 'description of rocket4', reserved: true,
      },
    ];

    const reservedData = rocketsData.filter((obj) => obj.reserved === true);

    const { container } = render(<PRocketView reservedData={reservedData} />);
    expect(container).toMatchSnapshot();
  });
});
