import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { ModalContainer } from "../components/restaurant-info-card.styles";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <ModalContainer>
      <Spacer position={"top"} size={"large"}>
        <Text>Rezzy Deets</Text>
      </Spacer>
    </ModalContainer>
  );
};
