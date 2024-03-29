import { View, Text } from "react-native";
import React from "react";
import About from "../Components/RestaurantDetails/About";
import { Divider } from "react-native-elements";
import MenuItem from "../Components/RestaurantDetails/MenuItem";

export default function RestaurantDetails() {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem />
    </View>
  );
}
