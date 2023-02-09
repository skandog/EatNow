import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const SearchView = styled(View)`
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space.l};
`;

const ListView = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space.l};
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
