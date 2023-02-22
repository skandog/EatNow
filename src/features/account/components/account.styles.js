import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";

const image = require("../../../../assets/home-background.jpg");

export const AccountBackgroundImage = styled(ImageBackground).attrs({
  source: image,
  resizeMode: "cover",
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;
