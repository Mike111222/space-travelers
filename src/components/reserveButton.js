import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { revRocket } from '../redux/rocket/rocketSlice';

const ReservRocket = ({ id, reserved }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={reserved
        ? 'text-sm bg-transparent border border-blue-600 text-blue-600 cursor-pointer mt-3 rounded px-[1.2rem] py-2'
        : 'text-white text-sm bg-blue-600 cursor-pointer mt-3 rounded px-[1.2rem] py-2'}
      onClick={() => dispatch(revRocket(id))}
    >
      {reserved ? 'Cancel reservation' : 'Reserve rocket'}
    </button>
  );
};

ReservRocket.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default ReservRocket;
