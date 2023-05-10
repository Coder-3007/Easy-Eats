import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../Components/HOme/Categories";
import HeaderTabs from "../Components/HOme/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../Components/HOme/RestaurantItems";
import SearchBar from "../Components/HOme/SearchBar";
import { Divider } from "react-native-elements";
import BottomTab from "../Components/HOme/BottomTab";

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
export default function Home() {
  const [restaurantData, setRestaurantDate] = React.useState(localRestaurants);
  const [city, setCity] = useState("Hollywood");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: "Bearer ${YELP_API_KEY}",
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantDate(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  // So for yelp yoou have to sign up to yelp fusion then you can use yelp api in your code

  // useEffect(() => {
  //   getRestaurantsFromYelp();
  // }, [city,activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
}
