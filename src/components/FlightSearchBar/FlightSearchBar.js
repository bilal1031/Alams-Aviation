import React from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export default function FlightSearchBar() {
  return (
    <FormItemsContainer>
      <TextField id="outlined-basic" label="Destination" variant="outlined" />
      <TextField id="outlined-basic" label="Source" variant="outlined" />

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </FormItemsContainer>
  );
}

const FormItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  background-color: #fafafa;
  border-radius: 5px;
`;
