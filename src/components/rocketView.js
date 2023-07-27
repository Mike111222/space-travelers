import { useSelector, useDispatch } from 'react-redux';
import { reserve, cancel } from '../redux/rocket/rocketSlice';
import Rocket from './rocket';

const RocketsView = () => {
  const dispatch = useDispatch();

  const rocketstate = useSelector((state) => state.rockets);
  const rocketsData = rocketstate.Data;

  const Reserve = (id) => {
    dispatch(reserve(id));
  };

  const Cancel = (id) => {
    dispatch(cancel(id));
  };

  return (
    rocketsData.map((obj) => (
      <Rocket
        data={obj}
        Reservation={Reserve}
        Cancelation={Cancel}
        key={obj.id}
      />
    ))
  );
};

export default RocketsView;
