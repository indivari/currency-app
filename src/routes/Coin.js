import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import "./Coin.css";

export const Coin = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
      .then((res) => {
        console.log(res.data);
        setCoin(res.data);
        console.log("show coin data", coin);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">{coin.market_cap_rank}</span>
          </div>

          <div className="info">
            <div className="coin-heading">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <h1>{coin.name}</h1>
              <h1>{coin.symbol}</h1>
            </div>

            <div className="coin-price">
              {coin.market_data ? (
                <h1>{coin.market_data.current_price.aud}</h1>
              ) : null}
              {/*  */}
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_1h_in_currency
                          .aud
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_24h_in_currency
                          .aud
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_7d_in_currency
                          .aud
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_14d_in_currency
                          .aud
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_30d_in_currency
                          .aud
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_1y_in_currency
                          .aud
                      }
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="about">
          {coin.description ? coin.description.en : null}
        </div>
      </div>
    </div>
  );
};
