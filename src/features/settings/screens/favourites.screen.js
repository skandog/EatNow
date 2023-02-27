import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity, FlatList } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Text } from "../../../components/typography/text.component";

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFaves = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <FavouritesList
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
  ) : (
    <NoFaves>
      <Text>No favourites at the moment</Text>
    </NoFaves>
  );
};
