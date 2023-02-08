import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const SearchView = styled(View)`
  background-color: green;
  padding: 16px;
`;

const ListView = styled(View)`
  flex: 1;
  background-color: "white";
  padding: 16px;
`;

export const RestaurantScreen = () => {
  return (
    <>
      <SearchView>
        <Searchbar />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </>
  );
};
