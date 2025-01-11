import cryptoData from "../model/crypto.model.js";

export const getLatestData = async (req, res) => {
  try {
    const { coin } = req.query;
    console.log(coin);
    const response = await fetch(
      `${process.env.API_URL}?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );
    const data = await response.json();
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.log("error in crypto controller", error);
  }
};

export const findStandardDeviation = async (req, res) => {
  try {
    const { coin } = req.query;

    
    if (!coin) {
      return res
        .status(400)
        .send({ error: "Coin query parameter is required" });
    }

    const records = await cryptoData
      .find({ coinId: coin })
      .sort({ timeStamp: -1 })
      .limit(100)
      

    if (records.length === 0) {
      return res
        .status(404)
        .send({ error: "No records found for the requested coin" });
    }

    const prices = records.map((record) => record.price);
    const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
  //  console.log("mean: ",mean);
    const variance =
      prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) /
      prices.length;

    //  console.log("variance: ",variance);
    const standardDeviation = Math.sqrt(variance);

  //  console.log("standardDeviation: ",standardDeviation);

    res.status(200).send({ deviation: standardDeviation.toFixed(2) });
  } catch (error) {
    console.error("Error in crypto controller", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

