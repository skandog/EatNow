import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

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

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <>
      <Search />

      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={MD2Colors.blue600} />
        </LoadingContainer>
      ) : (
        <RestaurantList
          // data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position={"bottom"} size="large">
              <TouchableOpacity
                onPress={() => navigation.navigate("RestaurantDetail")}
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};
