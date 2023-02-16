import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Text, Image } from "react-native";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.l};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardInfo = styled(View)`
  padding: ${(props) => props.theme.space.l};
`;

export const RestaurantCardTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const RestaurantCardAddress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const StarView = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.s};
  padding-bottom: ${(props) => props.theme.space.s};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const ModalContainer = styled(View)`
  flex: 1;
  align-items: center;
  
`;
