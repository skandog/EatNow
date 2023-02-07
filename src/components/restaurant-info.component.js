import React from "react";
import { Text } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Food House",
    icon,
    photos = [
      "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_267,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_132,g_auto/s1rpyrpvzgnww1jmxus1",
    ],
    address = "100 london street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return <Text style={{ color: "white" }}>{name}</Text>;
};
