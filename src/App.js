import "./App.css";
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import { Alert } from "@mui/material";

import { CoinItem } from "./components/CoinItem";
import { Coin } from "./routes/Coin.js";
import { Searchbar } from "./components/Searchbar";

const StyledHeading = styled.h1`
  font-family: roboto;
  font-size: 36px;
`;

function App() {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  const filteredCoins = useMemo(
    () =>
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [coins, searchTerm]
  );

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="App">
      <StyledHeading>crypto currency</StyledHeading>

      {error ? (
        <Alert severity="error">Error occurred - Please try again!</Alert>
      ) : (
        <>
          <Searchbar coins={coins} handleSearch={handleSearch} />

          {filteredCoins.map((coin) => {
            return (
              <Link to={`/coins/${coin.id}`} element={<Coin />} key={coin.id}>
                <CoinItem
                  name={coin.name}
                  image={coin.image}
                  price={coin.current_price}
                  priceChange24h={coin.price_change_24h}
                />
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
