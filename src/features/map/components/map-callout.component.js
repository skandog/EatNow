import React from "react";
import { Image, Text, View } from "react-native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  console.log(restaurant.photos[0]);
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
