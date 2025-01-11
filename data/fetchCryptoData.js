// jobs/fetchCryptoData.js
import fetch from "node-fetch";
import cryptoData from "../model/crypto.model.js";

const COINS = ["bitcoin", "matic-network", "ethereum"];
const API_URL = "https://api.coingecko.com/api/v3/simple/price";

async function fetchCryptoData() {
    console.log("fetch");
  try {
    const response = await fetch(`${API_URL}?ids=${COINS.join(",")}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`);
    const data = await response.json();

    console.log(data);

    COINS.forEach(async (coin) => {
      const { usd: price, usd_market_cap: marketCap, usd_24h_change: change24h } = data[coin];
      const datacrypto = new cryptoData({ coinId: coin, price, marketCap, change24h });
      await datacrypto.save();
    });

    console.log("Crypto data fetched and stored successfully.");
  } catch (error) {
    console.error("Error fetching crypto data:", error);
  }
}

export default fetchCryptoData;
