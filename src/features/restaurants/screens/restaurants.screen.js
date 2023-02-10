import React from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";

const SearchView = styled(View)`
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space.l};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  return (
    <>
      <SearchView>
        <Searchbar />
      </SearchView>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => (
          <Spacer position={"bottom"} size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
