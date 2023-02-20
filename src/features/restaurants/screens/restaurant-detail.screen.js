import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ModalContainer } from "../components/restaurant-info-card.styles";

const Icon = (props) => {
  const { iconName, otherProps } = props;
  return <List.Icon {...otherProps} icon={iconName} />;
};

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  const customProps = {
    iconName: "food",
  };

  const { restaurant } = route.params;
  return (
    <ModalContainer>
      <Spacer position={"top"} size={"medium"}>
        <RestaurantInfoCard restaurant={restaurant} />
      </Spacer>
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item
              title="Sausages"
              left={(props) => <List.Icon {...props} icon="sausage" />}
            />
            {/* <List.Item title="Test" left={() => Icon(customProps)} /> */}
            <List.Item
              title="Eggs"
              left={(props) => <List.Icon {...props} icon="egg-fried" />}
            />
            <List.Item
              title="Coffee"
              left={(props) => <List.Icon {...props} icon="coffee" />}
            />
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
      </ScrollView>
    </ModalContainer>
  );
};
