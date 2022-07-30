import styled from "@emotion/styled";
import { AppBar, Typography } from "@mui/material";

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

export const Container = styled.div`
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
      to right,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url(${({ coverimage }) => (coverimage ? coverimage : "")});
`;
