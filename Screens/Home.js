import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../Components/Categories";
import HeaderTabs from "../Components/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../Components/RestaurantItems";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  const [restaurantData, setRestaurantDate] = useState(localRestaurants);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
