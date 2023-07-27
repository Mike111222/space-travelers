import React from 'react';
import PropTypes from 'prop-types';

const PRocketView = ({ reservedData }) => (
  <>
    <span className="sectionTitle">My Rockets</span>
    {reservedData.length === 0 && (
      <p>No rockets reserved yet!</p>
    )}

    {reservedData.length > 0 && (
      <table className="holderTable">
        <tbody>
          {reservedData.map((rocket) => (
            <tr key={rocket.id} className="rocketrow">
              <td className="rocketdata">{rocket.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </>
);

PRocketView.propTypes = {
  reservedData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default PRocketView;
