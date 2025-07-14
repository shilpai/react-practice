import React from "react";
import ReactDOM from "react-dom/client";

/**
 * #Header
 * - Logo
 * - Nav items
 *
 * #Body
 * - Search
 * - RestaurantContainer
 *   - Restaurant Card
 *
 * #Footer
 * - Copyright
 * - Links
 * - Address
 * - Content
 */

const styleCrad = {
  backgroundColor: "#f0f0f0"
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ReastaurantCard = (props) => {

  const {resData} = props;

  // const {resName, cusines} = props;
  console.log(props);
  return (
    <div className="res-card" style={styleCrad}>
      <img
      className="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/5/edec8cd2-313c-4fce-8b7f-b5873ac590ac_40bd387c-9352-4729-882b-aedf2a945d13.JPG" />

      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

const resObj = {
  info: {
    id: "234875",
    name: "Adil Hotel",
    cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
    locality: "Rautha Wada",
    areaName: "Chhindwara Locality",
    costForTwo: "₹150 for two",
    cuisines: ["North Indian", "Biryani", "Tandoor"],
    avgRating: 4.3,
    parentId: "27123",
    avgRatingString: "4.3",
    totalRatingsString: "1.3K+",
    sla: {
      deliveryTime: 37,
      lastMileTravel: 11.5,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.5 km",
      iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
      nextCloseTime: "2025-06-13 00:00:00",
      opened: true
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {}
      }
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129"
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {}
      }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--"
      }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  analytics: {
    context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd"
  },
  cta: {
    link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
    type: "WEBLINK"
  }
};



const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ReastaurantCard resData={resObj}/>
        {/* <ReastaurantCard resName="KFC" cusines="Burger, Zinger"/>
        <ReastaurantCard resName="RG Chai" cusines="Tea, Milk"/>
        <ReastaurantCard resName="MomoFoods" cusines="Momo"/>
         */}

      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
