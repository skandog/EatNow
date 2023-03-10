import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../components/utils/safe-area.component";
import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "fast-food",
  Maps: "map",
  Settings: "settings",
};

function screenOptions({ route }) {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = focused
        ? TAB_ICON[route.name]
        : TAB_ICON[route.name] + "-outline";

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
}

export const AppNavigator = () => (
  <SafeArea>
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Maps" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  </SafeArea>
);
