import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import RestaurantDetail from "./Screens/RestaurantDetails";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./Screens/OrderCompleted";
import RestaurantDetails from "./Screens/RestaurantDetails";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
          />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
