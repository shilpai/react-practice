import { CDN_URL } from "../utils/constants";

const styleCrad = {
  backgroundColor: "#f0f0f0"
};

const ReastaurantCard = (props) => {
  const { resData } = props;

  // Destructure from resData.data directly (since resData is the restaurant object)
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.data; // Changed from resData.data to just resData.data

  return (
    <div className="res-card" style={styleCrad}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString || "30-35 mins"}</h4>
    </div>
  );
};

export default ReastaurantCard;
