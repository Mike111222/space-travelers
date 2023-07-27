import React from 'react';
import { useSelector } from 'react-redux';
import { allMissions } from '../redux/mission/missionSlice';
// import { reserve } from '../redux/rocket/rocketSlice';

const MyProfile = () => {
  const missions = useSelector(allMissions);
  const missionsArray = missions.filter((mission) => mission.joined);
  // const rocketData = reserve.filter((data) => data.joined);
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
      </div>
    </>
  );
};

export default MyProfile;
