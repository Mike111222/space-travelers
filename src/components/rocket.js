import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ data, Reservation, Cancelation }) => (
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
      <button type="submit" className="bookRocket" onClick={() => Reservation(data.id)}>
        Reserve Rocket
      </button>
      )}

      {data.reserved && (
      <button type="submit" className="cancelRocket" onClick={() => Cancelation(data.id)}>
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
  Reservation: PropTypes.func.isRequired,
  Cancelation: PropTypes.func.isRequired,
};

export default Rocket;
