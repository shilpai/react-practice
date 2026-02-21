import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

const fetchRestaurantInfo = async () => {
  try {
    const data = await fetch(
      "https://corsproxy.io/?" + encodeURIComponent(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.578866647717145&lng=73.87590385973454&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
    );
    
    if (!data.ok) {
      throw new Error(`API call failed with status: ${data.status}`);
    }

    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json.data);
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.info || {};

    const { itemCards } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;