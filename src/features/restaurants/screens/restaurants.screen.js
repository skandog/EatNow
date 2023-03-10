import React, { useContext, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { RestaurantList } from "../components/restaurant-list.styles";

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={MD2Colors.blue600} />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
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
      )}
    </>
  );
};
