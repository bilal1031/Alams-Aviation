import styled from "@emotion/styled";
import { AppBar, Typography, Box } from "@mui/material";

export const CustromAppBar = styled(AppBar)`
  // background: rgba(90, 90, 90, 0.1);
  background: rgba(255, 255, 255, 1);
  box-shadow: none;
`;

export const GradientText = styled(Typography)`
  background: #9b30bf;
  background: linear-gradient(
    to right,
    #9b30bf,
    #2c92ec,
    #2c92ec,
    #2c92ec,
    #2c92ec
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Container = styled(Box)`
  min-height: calc(100vh);
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "white")};
`;

export const CoverContiainer = styled(Container)`
  background-image: url(${({ coverimage }) => (coverimage ? coverimage : "")});
  background-size: ${({ size }) => (size ? size : "cover")};
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const GradiantCoverCotainer = styled(CoverContiainer)`
  background-image: linear-gradient(
      ${({ direction }) => (direction ? direction : "to right")},
      ${({ color1 }) => (color1 ? color1 : "rgba(245, 246, 252, 0.52)")},
      ${({ color2 }) => (color2 ? color2 : "rgba(44, 146, 236, 0.73)")}
    ),
    url(${({ coverimage }) => (coverimage ? coverimage : "")});
`;

export const GradiantContainer = styled(Container)`
  background: linear-gradient(
    to right,
    ${({ color1 }) => color1},
    ${({ color2 }) => color2}
  );
`;
