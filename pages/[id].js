import React from "react";
import Layout from "./components/Layout";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import addToFavorites from "../slices/favoriteSlice";
import Favorites from "./Favorites";

function Crypto({ crypto }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToFavorites(crypto));
  };

  return (
    <Layout>
      <CoinPage>
        <CoinContainer>
          <img src={crypto.image.large} alt={crypto.name} />
          <h1>{crypto.name}</h1>
          <p>{crypto.symbol}</p>
          <p>&#8377;{crypto.market_data.current_price.inr}</p>
        </CoinContainer>
      </CoinPage>
    </Layout>
  );
}

export default Crypto;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      crypto: data,
    },
  };
}

const CoinPage = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  align-items: center;
`;

const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 4rem;
  width: 400px;

  > img {
    margin-bottom: 1rem;
  }

  > h1 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  > p {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
`;
