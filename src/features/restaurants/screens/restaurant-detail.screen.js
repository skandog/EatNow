import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ModalContainer } from "../components/restaurant-info-card.styles";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  return (
    <ModalContainer>
      <RestaurantInfoCard restaurant={restaurant} />
    </ModalContainer>
  );
};
