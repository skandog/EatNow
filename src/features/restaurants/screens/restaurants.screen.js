import React, { useContext } from "react";
import { View, FlatList, Pressable } from "react-native";
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
  // console.log(JSON.stringify(navigation, null, 2));

  console.log("nav: ", navigation);
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
            <Pressable onPress={() => navigation.navigate("RestaurantDetail")}>
              <Spacer position={"bottom"} size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </Pressable>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};
