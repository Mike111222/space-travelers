import React from 'react';
import { useSelector } from 'react-redux';
import { allMissions } from '../redux/mission/missionSlice';
import PRocketView from './rocketProfileView';

const MyProfile = () => {
  const missions = useSelector(allMissions);
  const missionsArray = missions.filter((mission) => mission.joined);
  const rocketData = useSelector((state) => state.rockets.Data);
  const bookedRockets = rocketData.filter((rockets) => rockets.reserved === true);
  return (
    <>
      <div className="mainContainer">
        <section className="myMissions">
          <span className="sectionTitle">My Missions</span>
          {missionsArray.length > 0 ? (
            <ul className="myMissionsList">
              {missionsArray.map((mission) => {
                if (mission?.joined) {
                  return (
                    <li className="item" key={mission.id}>
                      {mission.missionName}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          ) : (
            <span className="item">No Missions Joined</span>
          )}
        </section>
        <div className="rockets">
          <PRocketView reservedData={bookedRockets} />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
