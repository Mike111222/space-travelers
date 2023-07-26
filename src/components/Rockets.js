import { useSelector } from 'react-redux';
import SingleRocket from './SingleRocket';

const RocketList = () => {
  const { rockets, isLoading, isError } = useSelector((store) => store.rockets);

  if (isLoading && !isError) return <h1>Loading...</h1>;
  if (isError) return <h1>An error occur!</h1>;
  return (
    <div className="px-[5rem] py-[2rem] font-manrope">
      {rockets.map((rocket) => {
        const data = {
          id: rocket.id,
          name: rocket.rocket_name,
          desc: rocket.description,
          images: rocket.flickr_images[0],
          reserved: rocket.reserved,
        };
        return (
          <SingleRocket
            key={data.id}
            id={data.id}
            rocketName={data.name}
            description={data.desc}
            flickrImages={data.images}
            reserved={data.reserved}
          />
        );
      })}
    </div>
  );
};

export default RocketList;
