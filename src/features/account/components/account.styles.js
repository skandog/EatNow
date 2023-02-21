import styled from "styled-components/native";
import { ImageBackground } from "react-native";

const image = require("../../../../assets/home-background.jpg");

export const AccountBackgroundImage = styled(ImageBackground).attrs({
  source: image,
  resizeMode: "cover",
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
