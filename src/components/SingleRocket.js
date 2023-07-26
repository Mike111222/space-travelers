import PropTypes from 'prop-types';
import ReservRocket from './reserveButton';

const SingleRocket = ({
  id, desc, name, images, reserved,
}) => (
  <div className="h-auto flex justify-start items-start mb-[2.5rem] gap-x-[1.5rem]">
    <img src={images} className="w-[300px]" alt="rocket" />
    <div className="py-2">
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-base mt-2">{desc}</p>
      <ReservRocket id={id} reserved={reserved} />
    </div>
  </div>
);
export default SingleRocket;

SingleRocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
