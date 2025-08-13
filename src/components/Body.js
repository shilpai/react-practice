import ReastaurantCard from "./Restaurants";
import resList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  // Local state variable to hold the list of restaurants = super powerfull variable
  // useState is a hook that allows us to create state variables in functional components
  const [listOfRestaurants, setListOfRestaurants] = useState(...resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
          title="Search here"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
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
