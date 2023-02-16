import React, { useState } from "react";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ModalContainer } from "../components/restaurant-info-card.styles";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const { restaurant } = route.params;
  return (
    <ModalContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Section>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="coffee" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="Bacon" />
          <List.Item title="Eggs" />
          <List.Item title="Coffee" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
        >
          <List.Item
            title="Burger"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
          />
          <List.Item
            title="Fries"
            left={(props) => <List.Icon {...props} icon="french-fries" />}
          />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon {...props} icon="silverware-fork-knife" />
          )}
        >
          <List.Item
            title="Steak"
            left={(props) => <List.Icon {...props} icon="food-steak" />}
          />
          <List.Item
            title="Chicken Caesar"
            left={(props) => <List.Icon {...props} icon="food-drumstick" />}
          />
        </List.Accordion>
      </List.Section>
    </ModalContainer>
  );
};
