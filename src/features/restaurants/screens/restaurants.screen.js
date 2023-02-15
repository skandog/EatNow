import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchView = styled(View)`
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space.l};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(JSON.stringify(restaurants, undefined, 4));

  return (
    <>
      <SearchView>
        <Searchbar />
      </SearchView>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator />
        </LoadingContainer>
      ) : (
        <RestaurantList
          // data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position={"bottom"} size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};
