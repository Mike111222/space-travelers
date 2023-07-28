import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  joinedMission,
  leavedMission,
} from '../redux/mission/missionSlice';

const SingleMission = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{mission.missionName}</td>
      <td>{mission.description}</td>
      <td>
        <div
          className={mission?.joined ? 'member-badge active-mission' : 'member-badge'}
        >
          {mission?.joined ? 'Active Member' : 'NOT A MEMBER'}
        </div>
      </td>
      <td>
        <button
          className={mission.joined ? 'leaveBtn' : 'joinBtn'}
          type="button"
          onClick={() => {
            if (mission.joined) {
              dispatch(leavedMission(mission.id));
            } else {
              dispatch(joinedMission(mission.id));
            }
          }}
        >
          {mission?.joined ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

SingleMission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool,
  }).isRequired,
};
export default SingleMission;
