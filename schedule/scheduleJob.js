import cron from "node-cron";
import fetchData from "../data/fetchCryptoData";

function scheduleJob() {
  cron.schedule("0 */2 * * *", fetchData);
}

export default scheduleJob;
