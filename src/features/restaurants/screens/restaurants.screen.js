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
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => (
          <Spacer position={"bottom"} size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </>
  );
};
