import styled from "styled-components";
import Link from "next/link";
import { useDispatch } from "react-redux";
import addToBasket from "../../slices/favoriteSlice";

function Crypto({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  price_change_percentage_24h,
  id,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const fav = {
      name,
      price,
      symbol,
      marketcap,
      volume,
      image,
      priceChange,
    };

    dispatch(addToBasket(fav));
  };

  return (
    // <Link href="/[id]" as={`/${id}`}>
    <a>
      <CoinContainer className="flex flex-wrap">
        <CoinRow>
          <Coin>
            <CoinImg>
              <img src={image} alt={name} />
            </CoinImg>

            <Coinh1>
              <h1>{name}</h1>
            </Coinh1>
            <CoinP>
              <p>{symbol}</p>
            </CoinP>
          </Coin>
          <CoinData>
            <CoinPrice>
              <p>&#8377;{price}</p>
            </CoinPrice>
            <CoinVol>
              <p>&#8377;{volume.toLocaleString()}</p>
            </CoinVol>
            <Percent>
              {priceChange < 0 ? (
                <p className="text-red-500">{priceChange.toFixed(2)}%</p>
              ) : (
                <p className="text-green-500">{priceChange.toFixed(2)}%</p>
              )}
            </Percent>

            <MarketCap>
              <p>MarketCap: &#8377;{marketcap.toLocaleString()}</p>
            </MarketCap>
            <Fav>
              <button onClick={addItemToBasket}>Add to favorites</button>
            </Fav>
          </CoinData>
        </CoinRow>
      </CoinContainer>
    </a>
    //  </Link>
  );
}

export default Crypto;

const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #2e2e2e;
  width: 1200px;
  padding: 0rem 2rem;

  :hover {
    background: #171718;
    color: white;
  }
`;

const Coin = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
`;

const CoinImg = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Coinh1 = styled.div`
  font-size: 16px;
  width: 150px;
`;

const CoinP = styled.div`
  text-transform: uppercase;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;
const CoinPrice = styled.div`
  width: 110px;
`;
const CoinVol = styled.div`
  width: 155px;
`;

const MarketCap = styled.div`
  width: 300px;
`;

const Percent = styled.div`
  width: 100px;
`;
const Fav = styled.button`
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 5px;

  :hover {
    background-color: yellow;
    color: black;
  }
`;
