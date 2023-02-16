import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ModalContainer } from "../components/restaurant-info-card.styles";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <ModalContainer>
      <Spacer position={"top"} size={"large"}>
        <RestaurantInfoCard restaurant={item} />
      </Spacer>
    </ModalContainer>
  );
};
