import ReastaurantCard from "./Restaurants";
import resList from "../utils/MockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ReastaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <ReastaurantCard resData={resList[0]} />
        <ReastaurantCard resData={resList[1]} />
        <ReastaurantCard resData={resList[2]} />
        <ReastaurantCard resData={resList[3]} />
        <ReastaurantCard resData={resList[4]} /> */}
      </div>
    </div>
  );
};

export default Body;
