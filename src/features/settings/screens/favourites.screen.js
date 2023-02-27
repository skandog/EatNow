import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity, FlatList } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <RestaurantList
      data={favourites}
      renderItem={({ item }) => (
        <Spacer position={"bottom"} size="large">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};
