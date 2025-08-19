import { CDN_URL } from "../utils/constants";

const ReastaurantCard = ({ resData }) => {
  // Destructure the necessary properties from resData
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData || {};

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        width: "200px",
        textAlign: "left",
        margin: "10px",
      }}
    >
      <img
        style={{ width: "100%", height: "150px", borderRadius: "8px", objectFit: "cover" }}
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "8px 0 4px" }}>{name}</h3>
      <p style={{ fontSize: "13px", color: "#555", margin: "2px 0" }}>
        {cuisines?.join(", ")}
      </p>
      <p style={{ fontSize: "13px", margin: "2px 0" }}>⭐ {avgRating}</p>
      <p style={{ fontSize: "13px", margin: "2px 0" }}>{costForTwo}</p>
      <p style={{ fontSize: "13px", margin: "2px 0" }}>{sla?.deliveryTime} mins</p>
    </div>
  );
};

export default ReastaurantCard;
