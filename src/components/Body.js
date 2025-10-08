import ReastaurantCard from "./Restaurants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.578866647717145&lng=73.87590385973454&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await data.json();

      console.log("API Response:", json);

      // Swiggy API cards can have many types, we only want the restaurant info
      const restaurants =
        json?.data?.cards
          ?.map((card) => card?.data || card?.card?.card?.info)
          ?.filter((res) => res) || [];

      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => (res?.avgRating || res?.avgRatingString) > 4
    );
    setListOfRestaurants(filteredList);
  };

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <ReastaurantCard
            key={restaurant?.id || index}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
