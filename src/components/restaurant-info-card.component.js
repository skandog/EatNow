import React from "react";
import { StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 8px;
  background-color: white;
`;

// const Title = styled.Text`
//   padding: 16px;
//   color: red;
// `;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Title title={name} />
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 8,
    backgroundColor: "white",
  },
});
