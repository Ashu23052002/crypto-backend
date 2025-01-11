


const getLatestData = async (req, res) => {
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
    console.log("error in crypto controller",error);
  }
};

export default getLatestData;
