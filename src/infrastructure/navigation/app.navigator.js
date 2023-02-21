import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { SafeArea } from "../../components/utils/safe-area.component";
import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantsNavigator } from "./restaurants.navigator";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

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
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Maps" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </SafeArea>
);
