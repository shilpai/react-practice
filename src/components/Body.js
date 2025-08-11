import ReastaurantCard from "./Restaurants";
import resList from "../utils/MockData";

const Body = () => {
  let listOfRestaurants = [
    {
      data: {
        id: "334475",
        name: "KFC",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        slaString: "36 MINS",
        avgRating: "3.8"
      }
    },
    {
      data: {
        id: "334476",
        name: "Dominos",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        slaString: "36 MINS",
        avgRating: "4.5"
      }
    },
    {
      data: {
        id: "334477",
        name: "McDonald's",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        slaString: "36 MINS",
        avgRating: "4.1"
      }
    }
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            console.log("Filtered Restaurants: ", listOfRestaurants);
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
