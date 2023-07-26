import { useSelector } from 'react-redux';
import ProfileView from './DisplayRocket';

function Profile() {
  const rocketData = useSelector((state) => state.rockets.Data);
  const bookRocket = rocketData.filter((rockets) => rockets.reserved === true);
  return (
    <div className="profile">
      <div className="rockets">
        <ProfileView reservedData={bookRocket} />
      </div>
    </div>
  );
}
export default Profile;
