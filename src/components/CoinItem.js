import React from "react";
import { useState } from "react";

import styled from "styled-components";
import axios from "axios";

import { Coin } from "../routes/Coin";

const StyledCoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 20px;
  padding: 20px;
  &:hover {
    background-color: lightblue;
    transform:scale(1.04)
  transition: 0.3s ease-in-out;
 
  }
  box-shadow: 0px 0px 5px  #000000;
  cursor: pointer;
  
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const CoinItem = ({ name, image, price, priceChange24h }) => {
  const [coin, setCoin] = useState([]);
  const [isCoinClicked, setIsCoinClicked] = useState(false);

  return (
    <StyledCoinRow>
      {name}
      <StyledImg src={image} alt="" />
      <p>{price}</p>
      <p>{priceChange24h}</p>
    </StyledCoinRow>
  );
};
