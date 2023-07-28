import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ data, Reservation, Cancelation }) => (
  <div key={data.id} className="rocketDisplay">
    <img src={data.image} alt={`rocket ${data.id}s display`} className="rocketImage" />
    <section className="rInfo">
      <span className="title">{data.name}</span>
      {data.reserved ? (
        <>
          <div className="reserve">Reserved</div>
          <p className="rocketpara">{data.description}</p>
          <button type="submit" className="cancel" onClick={() => Cancelation(data.id)}>
            Cancel Reservation
          </button>
        </>
      ) : (
        <>
          <p>{data.description}</p>
          <button type="submit" className="book" onClick={() => Reservation(data.id)}>
            Reserve Rocket
          </button>
        </>
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
