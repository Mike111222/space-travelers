import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ data, handleReservations, handlecancelation }) => (
  <div key={data.id} className="rocketInfo">
    <img src={data.image} alt={`rocket ${data.id}s display`} className="rocketImage" />
    <section className="rocketSecInfo">
      <span className="rocketTitle">{data.name}</span>
      {data.reserved && (
      <>
        <div className="bookMarked">Reserved</div>
        <p className="rocketParagraphbooked">{data.description}</p>
      </>
      )}
      {!data.reserved && (
      <p className="rocketParagraph">{data.description}</p>
      )}

      {!data.reserved && (
      <button type="submit" className="bookRocket" onClick={() => handleReservations(data.id)}>
        Reserve Rocket
      </button>
      )}

      {data.reserved && (
      <button type="submit" className="cancelRocket" onClick={() => handlecancelation(data.id)}>
        Cancel Reservation
      </button>
      )}

    </section>
  </div>
);

Rocket.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleReservations: PropTypes.func.isRequired,
  handlecancelation: PropTypes.func.isRequired,
};

export default Rocket;
