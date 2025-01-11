import cron from "node-cron";
import fetchCryptoData from "../data/fetchCryptoData.js";

function scheduleJob() {
 // console.log("call huwa hai");
  cron.schedule("* */2 * * *", fetchCryptoData);
}

export default scheduleJob;
