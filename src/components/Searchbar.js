import React, { useState } from "react";

import styled from "styled-components";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { CryptoCurrencyViewer } from "./CoinItem";

const StyledSearchbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
`;

export const Searchbar = ({ coins, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <StyledSearchbarContainer>
        <TextField
          id="filled-basic"
          variant="filled"
          placeholder="start searching..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(searchTerm);
          }}
        />
      </StyledSearchbarContainer>
    </>
  );
};
