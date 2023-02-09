import React from "react";
import { Card } from "react-native-paper";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.l};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardInfo = styled(View)`
  padding: ${(props) => props.theme.space.l};
`;

const RestaurantCardTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

const RestaurantCardAddress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const StarView = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.s};
  padding-bottom: ${(props) => props.theme.space.s};
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Food House",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_267,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_132,g_auto/s1rpyrpvzgnww1jmxus1",
    ],
    address = "100 london street, London, SW1H 9HH",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardInfo>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <Section>
          <StarView>
            {ratingArray.map((elt, index) => {
              return <SvgXml xml={star} width={20} height={20} key={index} />;
            })}
          </StarView>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />

            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />

            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <RestaurantCardAddress>{address}</RestaurantCardAddress>
      </RestaurantCardInfo>
    </RestaurantCard>
  );
};