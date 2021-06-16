import Crypto from "./Crypto";

function CryptoList({ filteredCoins }) {
  return (
    <div>
      {filteredCoins.map((crypto) => {
        return (
          <Crypto
            key={crypto.id}
            name={crypto.name}
            id={crypto.id}
            price={crypto.current_price}
            symbol={crypto.symbol}
            marketcap={crypto.market_cap}
            volume={crypto.total_volume}
            image={crypto.image}
            priceChange={crypto.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default CryptoList;
