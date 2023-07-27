import React from 'react';
import PropTypes from 'prop-types';

const RocketView = ({ data, , Cancelation }) => data.map((obj) => (
  <div key={obj.id} className="rocketInfo">
    <img
      src={obj.image}Reservation
      alt={`rocket ${obj.id}'s display`}
      className="rocketImage"
    />
    <section className="rocketSecInfo">
      <span className="rocketTitle">{obj.name}</span>
      {obj.reserved && (
      <>
        <div className="bookMarked">Reserved</div>
        <p className="rocketParagraphbooked">{obj.description}</p>
      </>
      )}
      {!obj.reserved && <p className="rocketParagraph">{obj.description}</p>}

      {!obj.reserved && (
      <button
        type="submit"
        className="bookRocket"
        onClick={() => Reservation(obj.id)}
      >
        Reserve Rocket
      </button>
      )}

      {obj.reserved && (
      <button
        type="submit"
        className="cancelRocket"
        onClick={() => Cancelation(obj.id)}
      >
        Cancel Reservation
      </button>
      )}
    </section>
  </div>
));

RocketView.propTypes = {
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
export default RocketView;
