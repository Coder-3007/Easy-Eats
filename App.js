import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "./Components/Categories";
import HeaderTabs from "./Components/HeaderTabs";
import RestaurantItem from "./Components/RestaurantItem";
import SearchBar from "./Components/SearchBar";
import Home from "./Screens/Home";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}
