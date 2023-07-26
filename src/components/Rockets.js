import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rocket/rocketSlice';

const RocketList = () => {
  const { isLoading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  if (isLoading) {
    return (<h2 className="rocketLoading">Loading...</h2>);
  }

  return (
    <ul className="rocketList">
      {}
    </ul>
  );
};

export default RocketList;
