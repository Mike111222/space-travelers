import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reserve, cancel } from '../redux/rocket/rocketSlice';
import Rocket from './rocket';

const PRocketView = ({ reservedData }) => (
  <>
    <span className="sectionTitle">My Rockets</span>
    {reservedData.length === 0 ? (
      <p>No rockets reserved yet!</p>
    ) : (
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

const RocketsView = () => {
  const dispatch = useDispatch();

  const rocketData = useSelector((state) => state.rockets.Data);

  const Reserve = (id) => {
    dispatch(reserve(id));
  };

  const Cancel = (id) => {
    dispatch(cancel(id));
  };

  return (
    <>
      {rocketData.map((rocket) => (
        <Rocket
          data={rocket}
          Reservation={Reserve}
          Cancelation={Cancel}
          key={rocket.id}
        />
      ))}
    </>
  );
};

export { RocketsView, PRocketView };
