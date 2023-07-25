import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleMission from './SingleMission';
import { allMissions, getMissionFromAPI, isLoading } from '../redux/mission/missionSlice';

const Missions = () => {
  const missions = useSelector(allMissions);
  const loading = useDispatch(isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionFromAPI());
    }
  }, [dispatch, loading, missions.length]);
  return (
    <section className="missionContainer">
      <table className="missions">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <SingleMission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
